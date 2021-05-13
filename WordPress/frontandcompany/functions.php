<?php
// load stylesheets
function load_stylesheets() {
    wp_register_style('font', get_template_directory_uri() . '/css/fonts.css', array(), 1, 'all');
    wp_enqueue_style('font');

    wp_register_style('variables', get_template_directory_uri() . '/css/variables.css', array(), 1, 'all');
    wp_enqueue_style('variables');

    wp_register_style('style', get_template_directory_uri() . '/css/style.css', array(), 1, 'all');
    wp_enqueue_style('style');

    // wp_register_style('custom', get_template_directory_uri() . '/css/custom.css', array(), 1, 'all');
    // wp_enqueue_style('custom');
}

add_action('wp_enqueue_scripts', 'load_stylesheets');

// load scripts
function addjs() {
    wp_register_script('jquery', get_template_directory_uri() . 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', array(), 1, 1, 1); 
    wp_enqueue_script('jquery');

    wp_register_script('toggleCard', get_template_directory_uri() . '/js/toggleCards.js', array(), 1, 1, 1); 
    wp_enqueue_script('toggleCard');

    wp_register_script('menu', get_template_directory_uri() . '/js/menu.js', array(), 1, 1, 1); 
    wp_enqueue_script('menu');
}

add_action('wp_enqueue_scripts', 'addjs');