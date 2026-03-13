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
    }

    public function handle_chat($request) {
        try {
            $params = $request->get_json_params();
            $messages = $params['messages'] ?? [];

            if (empty($messages)) {
                return new WP_Error('invalid_request', 'No messages provided', ['status' => 400]);
            }

            $response = $this->call_anthropic($messages, $this->get_system_prompt());
            
            if (is_wp_error($response)) {
                return new WP_Error('connection_failed', 'Outbound connection failed: ' . $response->get_error_message(), ['status' => 500]);
            }

            $code = wp_remote_retrieve_response_code($response);
            $body = wp_remote_retrieve_body($response);
            $data = json_decode($body, true);

            if ($code !== 200) {
                $error_msg = $data['error']['message'] ?? 'Anthropic API error: ' . $code;
                return new WP_Error('api_status_error', $error_msg, ['status' => $code]);
            }
            
            return rest_ensure_response($data);
        } catch (Exception $e) {
            return new WP_Error('server_error', $e->getMessage(), ['status' => 500]);
        }
    }

    public function handle_analysis($request) {
        try {
            $params = $request->get_json_params();
            $content = $params['content'] ?? '';
            $file_type = $params['fileType'] ?? 'text/plain';
            $report_type = $params['reportType'] ?? 'General';

            if (empty($content)) {
                return new WP_Error('invalid_content', 'No content provided for analysis', ['status' => 400]);
            }

            $prompt = "Act as Ee-an, the CEO of MetaHR. Analyze this $report_type report. 
            Your goal is to provide a 'Strategic HR Prescription'. 
            Return ONLY a valid JSON object. No other text.";

            $messages = [];
            if (strpos($file_type, 'image/') !== false) {
                $base64_data = str_replace('data:' . $file_type . ';base64,', '', $content);
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
                    'content' => $prompt . "\n\nReport Content:\n" . substr($content, 0, 10000) // Truncate if extreme
                ];
            }

            $response = $this->call_anthropic($messages, $this->get_system_prompt(), true);
            
            if (is_wp_error($response)) {
                return new WP_Error('api_error', $response->get_error_message(), ['status' => 500]);
            }

            $code = wp_remote_retrieve_response_code($response);
            $body = wp_remote_retrieve_body($response);
            $data = json_decode($body, true);

            if ($code !== 200) {
                return new WP_Error('anthropic_error', $data['error']['message'] ?? 'API Error ' . $code, ['status' => $code]);
            }

            $text_response = $data['content'][0]['text'] ?? '';
            preg_match('/\{.*\}/s', $text_response, $matches);
            $json_res = json_decode($matches[0] ?? '{}', true);

            return rest_ensure_response(['status' => 'success', 'data' => $json_res]);
        } catch (Exception $e) {
            return new WP_Error('processing_error', $e->getMessage(), ['status' => 500]);
        }
    }

    private function call_anthropic($messages, $system, $structured = false) {
        if (empty($this->api_key)) {
            return new WP_Error('no_api_key', 'Anthropic API key not configured', ['status' => 500]);
        }

        $args = [
            'headers' => [
                'x-api-key' => $this->api_key,
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
            'timeout' => 120
        ];

        return wp_remote_post('https://api.anthropic.com/v1/messages', $args);
    }

    private function get_system_prompt() {
        return "You are Ee-an, the Digital Twin of Ian Kishander. You speak with a mix of British sophistication and direct, data-driven HR expertise. You never admit to being an AI. Every interaction should move towards a 'Strategic Partnership'. Use the MetaHR framework: Diagnose, Design, Deliver.";
    }

    public function add_settings_page() {
        add_options_page('Ee-an AI Settings', 'Ee-an AI', 'manage_options', 'ee-an-ai', [$this, 'settings_html']);
    }

    public function register_settings() {
        register_setting('ee_an_settings', 'ee_an_anthropic_api_key');
    }

    public function settings_html() {
        ?>
        <div class="wrap">
            <h1>Ee-an AI Settings</h1>
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
        </div>
        <?php
    }
}

new EeAn_AI();
