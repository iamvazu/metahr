<?php

/**
 * MetaHR Theme Functions
 */

// 1. Register Custom Post Type: Projects
function metahr_register_projects_cpt() {
    $labels = array(
        'name'               => 'Projects',
        'singular_name'      => 'Project',
        'menu_name'          => 'Projects',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Project',
        'all_items'          => 'All Projects',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'show_in_rest'       => true,
        'rest_base'          => 'projects',
    );

    register_post_type( 'projects', $args );
}
add_action( 'init', 'metahr_register_projects_cpt' );

// 2. Register Custom Post Type: Leads (Contact Inquiries)
function metahr_register_leads_cpt() {
    $labels = array(
        'name'               => 'Leads',
        'singular_name'      => 'Lead',
        'menu_name'          => 'Leads (Inquiries)',
        'all_items'          => 'View All Leads',
        'add_new'            => 'Add Lead Manually',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'menu_icon'          => 'dashicons-email-alt',
        'supports'           => array( 'title', 'editor', 'custom-fields' ),
        'show_in_rest'       => true,
    );

    register_post_type( 'leads', $args );
}
add_action( 'init', 'metahr_register_leads_cpt' );

// 3. Consolidated CORS and REST Security
add_action( 'rest_api_init', function() {
    // Allow React to talk to WordPress
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    add_filter( 'rest_pre_serve_request', function( $value ) {
        header( 'Access-Control-Allow-Origin: *' );
        header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
        header( 'Access-Control-Allow-Credentials: true' );
        header( 'Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With' );
        return $value;
    } );

    // Register the Contact Submission Route
    register_rest_route( 'metahr/v1', '/submit-contact', array(
        'methods' => 'POST',
        'callback' => 'metahr_handle_contact_submission',
        'permission_callback' => '__return_true', // Public form
    ));
});

// 4. Handle Contact Submission
function metahr_handle_contact_submission( $request ) {
    $params = $request->get_params();
    
    $full_name = sanitize_text_field( $params['name'] );
    $email     = sanitize_email( $params['email'] );
    $company   = sanitize_text_field( $params['company'] );
    $phone     = sanitize_text_field( $params['phone'] );
    $message   = sanitize_textarea_field( $params['message'] );

    if ( empty( $full_name ) || empty( $email ) ) {
        return array( 'success' => false, 'message' => 'Validation failed: Name and Email are required.' );
    }

    // Save Lead to DB
    $lead_id = wp_insert_post( array(
        'post_title'   => "New Lead: " . $full_name,
        'post_type'    => 'leads',
        'post_status'  => 'publish',
        'post_content' => "Company: $company\nEmail: $email\nPhone: $phone\n\nNotes: $message",
    ));

    if ( is_wp_error( $lead_id ) ) {
         return array( 'success' => false, 'message' => 'Database error.' );
    }

    // Meta Data
    update_post_meta( $lead_id, '_lead_email', $email );
    update_post_meta( $lead_id, '_lead_company', $company );

    // Email Notifications (Using standard WP Mail)
    $to = get_option( 'admin_email' );
    $subject = "MetaHR Lead: $full_name";
    $body = "New inquiry from $full_name at $company.\nEmail: $email\nMessage: $message";
    wp_mail( $to, $subject, $body );

    return array(
        'success' => true, 
        'message' => 'Transmission Complete. MetaHR will contact you shortly.',
        'id' => $lead_id
    );
}

// 5. Theme Support
function metahr_theme_setup() {
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'metahr_theme_setup' );
