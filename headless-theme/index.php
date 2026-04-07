<?php
/**
 * Root Mirror Bridge (Headless WordPress)
 * This file serves the React/Vite index.html as the primary application view 
 * to resolve the infinite rewrite loop on GoDaddy hosting.
 */

// 1. Get the current request path
$request_uri = $_SERVER['REQUEST_URI'];

// 2. Serve the static index.html for all frontend routes (SPA Fallback)
// Exclude WordPress core paths
if (!preg_match('/^\/wp-(admin|content|includes|json|login|signup)/', $request_uri)) {
    $index_file = ABSPATH . 'index.html';
    if (file_exists($index_file)) {
        header('Content-Type: text/html; charset=UTF-8');
        readfile($index_file);
        exit;
    }
}

// 3. Default WordPress behavior for admin/API
define( 'WP_USE_THEMES', true );
require __DIR__ . '/wp-blog-header.php';
