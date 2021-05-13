<?php get_header();?>

<?php $hero = get_field('hero'); ?>

<section class="landing">
        <div id="banner" class="flexbox">
            <div class="landing-images">
                <img src="<?php bloginfo('template_directory');?> /img/gift-store-img.jpg" alt="Gift Store">
                <img src="<?php bloginfo('template_directory');?> /img/clothing-store-img.jpg" alt="Clothing Store">
            </div>

            <div class="banner-wrapper flexbox">
                <div class="flex-70">
                    <div class="landing-content">
                        <div class="landing-text">
                            <!-- <h1 class="landing-h1">FRONT &</h1>
                            <h1 class="landing-h1">COMPANY</h1> -->

                            <h1 class="landing-h1"><?php echo $hero['large_header_pt1']; ?></h1>
                            <h1 class="landing-h1"><?php echo $hero['large_header_pt2']; ?></h1>

                            <h2 class="landing-blurb"><?php echo $hero['blurb']; ?></h2>

                            <div class="our-stores-secondary">
                                <a class="btn" href="#card-container">
                                    <h3 class="with-icon icon-down-arrow"><?php echo $hero['button_text']; ?></h3>
                                </a>
                            </div>
                        </div>

                        <?php

                        if ( !empty ($hero['lower_image']) ): ?>

                            <img class="lower-img" src="<?php echo esc_url( $hero['lower_image'] );?>" alt="">

                        <?php endif ?>
                    </div>
                </div>

                <div class="flex-30">
                    <?php

                    if ( !empty ($hero['upper_image']) ): ?>

                        <img class="upper-img" src="<?php echo esc_url( $hero['upper_image'] );?>" alt="">

                    <?php endif ?>
                </div>
            </div>
        </div>

        <div class="our-stores">
            <a class="btn" href="#card-container">
                <h3 class="with-icon icon-down-arrow">our stores</h3>
            </a>
        </div>
    </section>

    <?php 
        $accordion = get_field('accordion_consignment');
        $location = $accordion['location'];
        $hours = $accordion['hours']; 
        $btn1 = $accordion['button_group']['btn_1'];
        $btn2 = $accordion['button_group']['btn_2'];
        $btn3 = $accordion['button_group']['btn_3'];
    ?>

    <section id="card-container">
        <div class="card">
            <h2 class="card-header"><?php echo $accordion['header']; ?></h2>
            <div class="card-content">
                <div class="card-column">
                    <div class="contact-info">
                        <h4>T: <?php echo $accordion['telephone']; ?></h4>
                        <h4>E: <?php echo $accordion['email']; ?></h4>
                    </div>

                    <div class="contact-location">
                        <h3><?php echo $location['header']; ?></h3>
                        <h4><?php echo $location['address']; ?></h4>
                        <h4><?php echo $location['city_province']; ?></h4>
                        <h4><?php echo $location['postal_code']; ?></h4>
                    </div>
                </div>

                <div class="card-column">
                    <h3><?php echo $hours['header']; ?></h3>
                    <!-- <div class="hours">
                        <h4>Monday - Wednesday</h4>
                        <h4>11:00AM - 5:30PM</h4>
                    </div>

                    <div class="hours">
                        <h4>Thursday - Sunday</h4>
                        <h4>11:00AM - 6:00PM</h4>
                    </div>

                    <div class="hours">
                        <h4>Statutory Holidays</h4>
                        <h4>12:00PM - 6:30PM</h4>
                    </div> -->
                    <div class="hours">
                        <?php echo $hours['hour_breakdown']; ?>
                    </div>
                </div>

                <div class="card-column">
                    <?php if ( !empty( $accordion['button_group'] ) ): ?>
                        <div class="btn-wrapper">
                            <a href="<?php echo ; ?>"> <?php echo $btn1; ?></a>
                            <!-- <button class="btn">BOOK AN APPOINTMENT</button>
                            <button class="btn">VISIT SITE</button> -->
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="card">
            <h2 class="card-header">CLOTHING</h2>
            <div class="card-content">
                <div class="card-column">
                    <div class="contact-info">
                        <h4><b>T: </b> (604) 879 8431</h4>
                        <h4><b>E: </b> shopping@frontandcompany.ca</h4>
                    </div>

                    <div class="contact-location">
                        <h3>LOCATION</h3>
                        <h4>3772 Main St.</h4>
                        <h4>Vancouver, BC.</h4>
                        <h4>V5V 3N7</h4>
                    </div>
                </div>

                <div class="card-column">
                    <h3>STORE HOURS</h3>
                    <div class="hours">
                        <h4>Monday - Wednesday</h4>
                        <h4>11:00AM - 5:30PM</h4>
                    </div>

                    <div class="hours">
                        <h4>Thursday - Sunday</h4>
                        <h4>11:00AM - 6:30PM</h4>
                    </div>

                    <div class="hours">
                        <h4>Statutory Holidays</h4>
                        <h4>12:00PM - 6:30PM</h4>
                    </div>

                </div>

                <div class="card-column">
                    <div class="btn-wrapper">
                        <button class="btn">VISIT SITE</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h2 class="card-header">GIFTS</h2>
            <div class="card-content">
                <div class="card-column">
                    <div class="contact-info">
                        <h4><b>T: </b> (604) 879 8431</h4>
                        <h4><b>E: </b> shopping@frontandcompany.ca</h4>
                    </div>

                    <div class="contact-location">
                        <h3>LOCATION</h3>
                        <h4>3740 Main St.</h4>
                        <h4>Vancouver, BC.</h4>
                        <h4>V5V 3N7</h4>
                    </div>
                </div>

                <div class="card-column">
                    <h3>STORE HOURS</h3>
                    <div class="hours">
                        <h4>Monday - Wednesday</h4>
                        <h4>11:00AM - 5:30PM</h4>
                    </div>

                    <div class="hours">
                        <h4>Thursday - Sunday</h4>
                        <h4>11:00AM - 6:30PM</h4>
                    </div>

                    <div class="hours">
                        <h4>Statutory Holidays</h4>
                        <h4>12:00PM - 6:30PM</h4>
                    </div>
                </div>

                <div class="card-column">
                    <div class="btn-wrapper">
                        <button class="btn">VISIT SITE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php get_footer();?>