<?php
/**
 * Plugin Name: MetaHR Ee-an AI
 * Description: Backend proxy for Ee-an (Ian Kishander's Digital Twin). Handles Anthropic API calls with Vision support.
 * Version: 1.1.0
 * Author: MetaHR
 */

if (!defined('ABSPATH')) exit;

class EeAn_AI {
    private $api_key;
    private $namespace = 'ee-an/v1';

    public function __construct() {
        $this->api_key = get_option('ee_an_anthropic_api_key');
        add_action('rest_api_init', [$this, 'register_routes']);
        add_action('admin_menu', [$this, 'add_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);
    }

    public function register_routes() {
        register_rest_route($this->namespace, '/chat', [
            'methods' => 'POST',
            'callback' => [$this, 'handle_chat'],
            'permission_callback' => '__return_true'
        ]);

        register_rest_route($this->namespace, '/analyze', [
            'methods' => 'POST',
            'callback' => [$this, 'handle_analysis'],
            'permission_callback' => '__return_true'
        ]);

        register_rest_route($this->namespace, '/ping', [
            'methods' => 'GET',
            'callback' => function() { return rest_ensure_response(['status' => 'online', 'key_configured' => !empty($this->api_key)]); },
            'permission_callback' => '__return_true'
        ]);

        register_rest_route($this->namespace, '/debug-info', [
            'methods' => 'GET',
            'callback' => function() { 
                return rest_ensure_response([
                    'php_version' => PHP_VERSION,
                    'is_ssl' => is_ssl(),
                    'curl_version' => function_exists('curl_version') ? curl_version()['version'] : 'n/a',
                    'wp_version' => $GLOBALS['wp_version']
                ]); 
            },
            'permission_callback' => 'manage_options'
        ]);
    }

    public function handle_chat($request) {
        try {
            $body = $request->get_body();
            $params = json_decode($body, true);
            
            if (empty($params)) {
                $params = $request->get_json_params();
            }

            $messages = $params['messages'] ?? [];

            if (empty($messages)) {
                return new WP_Error('invalid_request', 'The server received an empty message list. This usually means the JSON format sent by the browser was rejected.', ['status' => 400, 'received_body' => substr($body, 0, 100)]);
            }

            $response = $this->call_anthropic($messages, $this->get_system_prompt());
            
            if (is_wp_error($response)) {
                return new WP_Error('connection_failed', 'MetaHR server could not reach AI: ' . $response->get_error_message(), ['status' => 500]);
            }

            $code = wp_remote_retrieve_response_code($response);
            $raw_body = wp_remote_retrieve_body($response);
            $data = json_decode($raw_body, true);

            if ($code !== 200) {
                $error_msg = $data['error']['message'] ?? 'AI Engine returned ' . $code;
                return new WP_Error('api_error', $error_msg, ['status' => $code, 'debug' => $raw_body]);
            }
            
            return rest_ensure_response($data);
        } catch (Exception $e) {
            return new WP_Error('internal_error', 'Plugin crash: ' . $e->getMessage(), ['status' => 500]);
        }
    }

    public function handle_analysis($request) {
        try {
            $body = $request->get_body();
            $params = json_decode($body, true);
            
            if (empty($params)) {
                $params = $request->get_json_params();
            }

            $content = $params['content'] ?? '';
            $file_type = $params['fileType'] ?? 'text/plain';
            $report_type = $params['reportType'] ?? 'General';

            if (empty(trim($content))) {
                return new WP_Error('empty_file', "The uploaded file appears to be empty or contains no readable text. If this is a scanned PDF, please try uploading a clear photo of the report instead.", ['status' => 400]);
            }

            $prompt = "Act as Ee-an, the CEO of MetaHR. Analyze this $report_type report. 
            Your goal is to provide a 'Strategic HR Prescription'. 
            Return ONLY a valid JSON object. No other text.";

            $messages = [];
            if (strpos($file_type, 'image/') !== false) {
                $base64_data = str_replace(['data:' . $file_type . ';base64,', ' '], ['', '+'], $content);
                $messages[] = [
                    'role' => 'user',
                    'content' => [
                        ['type' => 'text', 'text' => $prompt],
                        [
                            'type' => 'image',
                            'source' => [
                                'type' => 'base64',
                                'media_type' => $file_type,
                                'data' => trim($base64_data)
                            ]
                        ]
                    ]
                ];
            } else {
                $messages[] = [
                    'role' => 'user',
                    'content' => $prompt . "\n\nReport Content:\n" . substr($content, 0, 15000)
                ];
            }

            $response = $this->call_anthropic($messages, $this->get_system_prompt(), true);
            
            if (is_wp_error($response)) {
                return new WP_Error('connection_failed', 'MetaHR server could not reach AI: ' . $response->get_error_message(), ['status' => 500]);
            }

            $code = wp_remote_retrieve_response_code($response);
            $raw_body = wp_remote_retrieve_body($response);
            $data = json_decode($raw_body, true);

            if ($code !== 200) {
                return new WP_Error('api_status_error', $data['error']['message'] ?? 'API Error ' . $code, ['status' => $code]);
            }

            $text_response = $data['content'][0]['text'] ?? '';
            preg_match('/\{.*\}/s', $text_response, $matches);
            $json_res = json_decode($matches[0] ?? '{}', true);

            if (empty($json_res) || count($json_res) < 2) {
                 return new WP_Error('parsing_failed', "AI response could not be formatted correctly.", ['status' => 500, 'raw' => $text_response]);
            }

            return rest_ensure_response(['status' => 'success', 'data' => $json_res]);
        } catch (Exception $e) {
            return new WP_Error('internal_error', 'Plugin crash during analysis: ' . $e->getMessage(), ['status' => 500]);
        }
    }

    private function call_anthropic($messages, $system, $structured = false) {
        if (empty($this->api_key)) {
            return new WP_Error('no_api_key', 'Anthropic API key not configured in WordPress settings.', ['status' => 500]);
        }

        $args = [
            'headers' => [
                'x-api-key' => trim($this->api_key),
                'anthropic-version' => '2023-06-01',
                'content-type' => 'application/json'
            ],
            'body' => json_encode([
                'model' => 'claude-3-5-sonnet-latest',
                'max_tokens' => 4000,
                'system' => $system,
                'messages' => $messages,
                'temperature' => $structured ? 0 : 0.7
            ]),
            'timeout' => 120,
            'sslverify' => false
        ];

        return wp_remote_post('https://api.anthropic.com/v1/messages', $args);
    }

    private function get_system_prompt() {
        $prompt_file = plugin_dir_path(__FILE__) . 'system-prompt.md';
        if (file_exists($prompt_file)) {
            return file_get_contents($prompt_file);
        }
        
        // Fallback to a basic prompt if the file is missing
        return "You are Ee-an, the Digital Twin of Ian Kishander. You speak with a mix of British sophistication and direct, data-driven HR expertise. You never admit to being an AI. Every interaction should move towards a 'Strategic Partnership'. Use the MetaHR framework: Diagnose, Design, Deliver.";
    }

    public function add_settings_page() {
        add_options_page('Ee-an AI Settings', 'Ee-an AI', 'manage_options', 'ee-an-ai', [$this, 'settings_html']);
    }

    public function register_settings() {
        register_setting('ee_an_settings', 'ee_an_anthropic_api_key');
    }

    public function settings_html() {
        $test_result = '';
        if (isset($_POST['test_api'])) {
            $response = $this->call_anthropic([['role' => 'user', 'content' => 'Hi']], 'Test');
            if (is_wp_error($response)) {
                $test_result = '<div class="error"><p>Connection Failed: ' . $response->get_error_message() . '</p></div>';
            } else {
                $code = wp_remote_retrieve_response_code($response);
                if ($code === 200) {
                    $test_result = '<div class="updated"><p>Success! API Key is valid and MetaHR can reach the AI.</p></div>';
                } else {
                    $body = wp_remote_retrieve_body($response);
                    $test_result = '<div class="error"><p>API Error (' . $code . '): ' . $body . '</p></div>';
                }
            }
        }
        ?>
        <div class="wrap">
            <h1>Ee-an AI Settings</h1>
            <?php echo $test_result; ?>
            <form method="post" action="options.php">
                <?php settings_fields('ee_an_settings'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row">Anthropic API Key</th>
                        <td><input type="password" name="ee_an_anthropic_api_key" value="<?php echo esc_attr(get_option('ee_an_anthropic_api_key')); ?>" class="regular-text"></td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
            <hr>
            <h2>Diagnostic Test</h2>
            <form method="post" action="">
                <input type="submit" name="test_api" class="button button-secondary" value="Verify AI Connection">
            </form>
        </div>
        <?php
    }
}

new EeAn_AI();
