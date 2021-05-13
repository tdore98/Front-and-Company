<!DOCTYPE html>
<html lang="en">

<head>
    <!-- https://www.elegantthemes.com/blog/tips-tricks/converting-html-sites-to-wordpress-sites -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page | Front & Company</title>

    <link rel="stylesheet" href="https://use.typekit.net/aon5yho.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet">

    <?php wp_head();?>
</head>

<body>
    <nav id="mobile-nav" class="mobile-nav" hidden>
        <div id="mobile-nav-container">
            <div class="mobile-nav-item">
                <img id="close" src="<?php bloginfo('template_directory');?> /img/close.svg" alt="Close Button">
            </div>
            <div class="mobile-nav-item">
                <a href="index2.html">
                    <h2>HOME</h2>
                </a>
            </div>
            <div class="mobile-nav-item">
                <a href="#consignment">
                    <h2>CONSIGNMENT</h2>
                </a>
            </div>
            <div class="mobile-nav-item">
                <a href="#clothing">
                    <h2>CLOTHING</h2>
                </a>
            </div>

            <div class="mobile-nav-item">
                <a href="#GIFTS">
                    <h2>GIFTS</h2>
                </a>
            </div>
            <div class="mobile-nav-item">
                <a href="#contact">
                    <h2>CONTACT US</h2>
                </a>
            </div>
        </div>
    </nav>

    <nav id="main-nav">
        <a id="front-logo" class="main-nav-item" href="#">
            <img class="main-nav-icon" src="<?php bloginfo('template_directory');?> /img/logo-concept.png" alt="Front & Company logo">
        </a>

        <a class="main-nav-item" target="_blank" href="https://www.clothing.frontandcompany.ca/pages/faq">CONSIGNMENT</a>

        <a class="main-nav-item" target="_blank" href="https://www.clothing.frontandcompany.ca">CLOTHING</a>

        <a class="main-nav-item" target="_blank" href="https://gifts.frontandcompany.ca/">GIFTS</a>

        <a id="menu-icon" class="main-nav-item" href="#">
            <img class="main-nav-icon" src="<?php bloginfo('template_directory');?> /img/menu.svg" alt="Menu Icon">
        </a>
    </nav>