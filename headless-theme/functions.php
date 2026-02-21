<?php

/**
 * MetaHR Theme Functions
 */

// 1. Register Custom Post Type: Projects
function metahr_register_projects_cpt() {
    $labels = array(
        'name'               => _x( 'Projects', 'post type general name', 'metahr' ),
        'singular_name'      => _x( 'Project', 'post type singular name', 'metahr' ),
        'menu_name'          => _x( 'Projects', 'admin menu', 'metahr' ),
        'name_admin_bar'     => _x( 'Project', 'add new on admin bar', 'metahr' ),
        'add_new'            => _x( 'Add New', 'project', 'metahr' ),
        'add_new_item'       => __( 'Add New Project', 'metahr' ),
        'new_item'           => __( 'New Project', 'metahr' ),
        'edit_item'          => __( 'Edit Project', 'metahr' ),
        'view_item'          => __( 'View Project', 'metahr' ),
        'all_items'          => __( 'All Projects', 'metahr' ),
        'search_items'       => __( 'Search Projects', 'metahr' ),
        'parent_item_colon'  => __( 'Parent Projects:', 'metahr' ),
        'not_found'          => __( 'No projects found.', 'metahr' ),
        'not_found_in_trash' => __( 'No projects found in Trash.', 'metahr' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'projects' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'show_in_rest'       => true, // Essential for Headless
        'rest_base'          => 'projects',
    );

    register_post_type( 'projects', $args );
}
add_action( 'init', 'metahr_register_projects_cpt' );

// 2. Enable CORS for React Frontend
function metahr_cors_allow_origin() {
    register_rest_route( 'metahr/v1', '/options', array(
        'methods' => 'GET',
        'callback' => 'metahr_get_options',
        'permission_callback' => '__return_true',
    ));
}
add_action( 'rest_api_init', 'metahr_cors_allow_origin' );

add_action( 'rest_api_init', function() {
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    add_filter( 'rest_pre_serve_request', function( $value ) {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Access-Control-Allow-Methods: GET' );
        header( 'Access-Control-Allow-Credentials: true' );
        header( 'Access-Control-Expose-Headers: Link', false );
        return $value;
    } );
}, 15 );

// 3. Add Custom Fields to REST API (if using ACF, this is usually handled by the ACF to REST API plugin)
// But we can add specific meta here if needed.
add_action( 'rest_api_init', function() {
    register_rest_field( 'projects', 'featured_image_url', array(
        'get_callback' => function( $post_arr ) {
            $id = $post_arr['id'];
            $img_id = get_post_thumbnail_id( $id );
            return $img_id ? wp_get_attachment_image_url( $img_id, 'full' ) : null;
        },
        'update_callback' => null,
        'schema'          => null,
    ));
});

// 4. Custom Endpoint for Brand Colors/Settings
function metahr_get_options() {
    return array(
        'colors' => array(
            'navy' => '#2F4156',
            'teal' => '#567C8D',
            'skyBlue' => '#C8D9E6',
            'beige' => '#F5EFEB',
            'white' => '#FFFFFF',
        ),
        'logo' => 'MetaHR 2.ai', // Placeholder for logo identification
        'quote' => array(
            'text' => 'Titles are granted, but it’s your behavior that earns you respect.',
            'author' => 'The Leadership Challenge'
        )
    );
}

// 5. Theme Support
function metahr_theme_setup() {
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'menus' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'metahr' ),
    ) );
}
add_action( 'after_setup_theme', 'metahr_theme_setup' );

// 6. Handle ACF Fields in REST API (Optional but helpful)
// Note: Requires ACF to REST API plugin or manual registration
add_action( 'rest_api_init', function() {
    register_rest_field( 'projects', 'acf', array(
        'get_callback' => function( $post_arr ) {
            if ( function_exists( 'get_fields' ) ) {
                return get_fields( $post_arr['id'] );
            }
            return null;
        },
        'update_callback' => null,
        'schema'          => null,
    ));
});
