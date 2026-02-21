<?php
// This theme is designed for a headless WordPress setup.
// All content is served via the WP REST API.
header('Location: ' . get_rest_url());
exit;
