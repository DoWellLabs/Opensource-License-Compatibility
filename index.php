<?php
/**
 * Plugin Name:       DoWellLabs-license-compatibility
 * Description:       The Open Source License Compatibility check API provides access to a wide range of legal information and resources. It allows developers to retrieve information about software licenses, legal documents, legal entities, check license compatibility, and more. The API aims to facilitate the integration of legal information into applications, websites, or other software systems.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Dowell Labs
 * License:           GPL-2.0-or-later
 * Author URI:        https://github.com/DoWellLabs/Opensource-License-Compatibility
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * 
 */


 add_action( 'admin_menu', 'dowell_init_menu' );

/**
 * Init Admin Menu.
 *
 * @return void
 */
function dowell_init_menu() {
    add_menu_page(
        
         'Dowell Opensource',
           'Dowell Options',
          'manage_options', 
          'dowell', 
          'dowell_admin_page', 
          'dashicons-admin-plugins', '2.1' );
}

/**
 * Init Admin Page.
 *
 * @return void
 */
function dowell_admin_page() {
    require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
}

function compatibility($content){ 
    
	ob_start();
    $content =   require_once plugin_dir_path( __FILE__ ) . 'templates/app.php';
  if (is_file($content)) {        
     @include($content);
   }

   return ob_get_clean();
}

add_shortcode('dowell', 'compatibility'); 

/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function dowell_admin_enqueue_scripts() {
    wp_enqueue_style( 'dowell-style', plugin_dir_url( __FILE__ ) . 'build/index.css' );
    wp_enqueue_script( 'dowell-script', plugin_dir_url( __FILE__ ) . 'build/index.js', array( 'wp-element' ), '1.0.0', true );
}

add_action( 'admin_enqueue_scripts', 'dowell_admin_enqueue_scripts' );