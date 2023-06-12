<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <title> <?php echo $title; ?> </title>

    <!-- meta tags -->
    <meta name="description" content="<?php echo $description ?>">
    <!-- favicon -->
    <link
      rel="icon"
      href="assets/img/favicon-aruba.png"
      sizes="20x20"
      type="image/png"
    />
    <!-- stop zoom in mobile  -->
    <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
      <meta name="viewport" content="width=device-width, user-scalable=no" />
  
    <!-- Additional plugin css -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/magnific-popup.css" />
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="assets/css/slick.css" />
    <link rel="stylesheet" href="assets/css/swiper.min.css" />
    <link rel="stylesheet" href="assets/css/nice-select.css" />
    <link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
    <!-- icons -->
    <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/css/themify-icons.css" />
    <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css">
    <!-- main css -->
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- responsive css -->
    <link rel="stylesheet" href="assets/css/responsive.css" />
  </head>
  <body>

  
    <!-- preloader area start -->
    <div class="preloader" id="preloader">
      <div class="preloader-inner">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
    </div>
    <!-- preloader area end -->
    <!-- search popup start -->
    <div class="body-overlay" id="body-overlay"></div>
    <div class="search-popup" id="search-popup">
      <form action="index.php" class="search-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search....." />
        </div>
        <button type="submit" class="submit-btn">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
    <!-- search popup End -->
    <!-- //. sign up Popup -->
    <div class="signUp-popup login-register-popup" id="signUp-popup">
      <div class="login-register-popup-wrap">
        <div class="row no-gutters">
          <div class="col-lg-6">
            <div class="thumb">
              <img src="assets/img/others/signup.png" alt="img" />
            </div>
          </div>

          <div class="col-lg-6 align-self-center">
            <div class="shape-thumb">
              <img src="assets/img/others/signup-shape.png" alt="img" />
            </div>

            <form class="login-form-wrap">
              <h4 class="text-center">Sign Up</h4>
              <div class="single-input-wrap style-two">
                <input type="text" placeholder="Name" />
                <span class="single-input-title"
                  ><i class="fa fa-user"></i
                ></span>
              </div>

              <div class="single-input-wrap style-two">
                <input type="text" placeholder="Email" />
                <span class="single-input-title"
                  ><i class="fa fa-envelope"></i
                ></span>
              </div>

              <div class="single-input-wrap style-two">
                <input type="text" placeholder="Password" />
                <span class="single-input-title"
                  ><i class="fa fa-lock"></i
                ></span>
              </div>

              <label class="checkbox">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <div class="single-input-wrap style-two">
                <button class="btn btn-yellow w-100">Sign Up</button>
              </div>

              <div class="sign-in-btn">
                I already have an account. <a href="#">Sign In</a>
              </div>
              <div class="social-wrap">
                <p>Or Continue With</p>
                <ul class="social-icon">
                  <li>
                    <a class="facebook" href="#" target="_blank"
                      ><i class="fa fa-facebook"></i
                    ></a>
                  </li>

                  <li>
                    <a class="tripadvisor" href="#" target="_blank"
                      ><i class="fa fa-tripadvisor"></i
                    ></a>
                  </li>

                  <li>
                    <a class="pinterest" href="#" target="_blank"
                      ><i class="fa fa-pinterest"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- //. sign up Popup End -->
    <!-- navbar area start -->
    <nav
      class="navbar navbar-area navbar-expand-lg nav-style-01 navbar-area-fixed"
    >
      <div class="container nav-container">
        <div class="responsive-mobile-menu">
          <div class="mobile-logo">
            <a href="index.php">
              <img src="assets/img/black-Logo.jpg" alt="logo" />
            </a>
          </div>
          <button
            class="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#tp_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggle-icon">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </span>
          </button>
          <div class="nav-right-content">
            <ul class="social-icon pl-0">
              <li>
                <a
                  class="pinterest"
                  href="mailto:&#x73;&#x61;&#x6c;&#x65;&#x73;&#x40;&#x61;&#x72;&#x75;&#x62;&#x61;&#x65;&#x78;&#x63;&#x75;&#x72;&#x73;&#x69;&#x6f;&#x6e;&#x73;&#x2e;&#x63;&#x6f;&#x6d;"
                  target="_blank"
                  ><i class="fa fa-envelope"></i
                ></a>
              </li>
              <li>
                <a class="twitter" href="#" target="_blank"
                  ><i class="fa fa-whatsapp"></i
                ></a>
              </li>
              <li>
                <a
                  class="facebook"
                  href="tel:&#x2b;&#x32;&#x39;&#x37;&#x20;&#x37;&#x33;&#x34;&#x20;&#x39;&#x30;&#x30;&#x31;"
                  target="_blank"
                  ><i class="fa fa-phone"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="tp_main_menu">
          <div class="logo-wrapper desktop-logo">
            <a href="index.php" class="main-logo">
              <img src="assets/img/Image 55.png" alt="logo" />
            </a>
            <a href="index.php" class="sticky-logo">
              <img src="assets/img/black-Logo.jpg" alt="logo" />
            </a>
          </div>


         <?php 
         $get_url = basename($_SERVER['SCRIPT_NAME']); 
         ?>

          <ul class="navbar-nav">
            <li class="<?php if($get_url=="index.php")  {echo "active"; } else {echo "";} ?>">
              <a href="index.php">Home</a>
            </li>
            <li class="<?php if($get_url == "about.php")  {echo "active"; } else {echo "";} ?>">
              <a href="about.php">About Us</a>
            </li>

            <li class="menu-item-has-children <?php if($get_url=="category.php")  {echo "active"; } else {echo "";} ?>">
              <a href="category.php">Aruba Tours</a>
              <ul class="sub-menu" id="tours">
                <li class="<?php if($get_url=="aruba_tour.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba_tour.php"> Aruba ATV Tours </a>
                </li>
                <li class="<?php if($get_url=="utv-tours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="utv-tours.php">
                  Aruba UTV Tours
                  </a>
                </li>
               
                <li class="<?php if($get_url=="aruba-private-ac-jeep-tours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-private-ac-jeep-tours.php">
                  Aruba Private AC Jeep Tours
                  </a>
                </li>

                <li class="<?php if($get_url=="aruba-private-open-air-safari-jeep-tours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-private-open-air-safari-jeep-tours.php">
                    Aruba Private Open-Air Safari Jeep Tours
                  </a>
                </li>
                <li class="<?php if($get_url=="aruba-outback-safari-jeeptours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-outback-safari-jeeptours.php">
                  Aruba Outback Safari Jeep Tours
                  </a>
                </li>

                <li class="<?php if($get_url=="aruba-catamaran-tours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-catamaran-tours.php">
                  Aruba Catamaran Tours
                  </a>
                </li>

                <li class="<?php if($get_url=="aruba-private-catamaran-tours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-private-catamaran-tours.php">
                    Aruba Private Catamaran Tours
                  </a>
                </li>

                <li class="<?php if($get_url=="aruba-private-boats-tours.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-private-boats-tours.php">
                    Aruba Boat Tours
                  </a>
                </li>
                               
              </ul>

              <!-- 🧡❤💛💙💙💙💕💟❣💕❣ -->
              <div class="dropdown absolute_dropdown">
                <a class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <!-- // this is for responsive only -->
                </a>
                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                  <a class="dropdown-item <?php echo ($get_url=="aruba_tour.php")  ?   "active" :  "" ?>" href="aruba_tour.php">Aruba ATV Tours</a>
                  <a class="dropdown-item <?php echo ($get_url=="utv-tours.php")  ?   "active" :  "" ?>" href="utv-tours.php">Aruba UTV Tours</a>
                  <a class="dropdown-item <?php echo ($get_url=="aruba-private-ac-jeep-tours.php")  ?   "active" :  "" ?>" href="aruba-private-ac-jeep-tours.php">Aruba Private AC Jeep Tours</a>
                  <a  class="dropdown-item <?php echo ($get_url=="aruba-private-open-air-safari-jeep-tours.php")  ?   "active" :  "" ?>"  href="aruba-private-open-air-safari-jeep-tours.php">
                    Aruba Private Open-Air Safari Jeep Tours
                  </a>
                  <a class="dropdown-item <?php echo ($get_url=="aruba-outback-safari-jeeptours.php")  ?   "active" :  "" ?>" href="aruba-outback-safari-jeeptours.php">Aruba Outback Safari Jeep Tours</a>
                  <a class="dropdown-item <?php echo ($get_url=="aruba-catamaran-tours.php")  ?   "active" :  "" ?>" href="aruba-catamaran-tours.php">
                  Aruba Catamaran Tours
                  </a>
                  <a class="dropdown-item <?php echo ($get_url=="aruba-private-catamaran-tours.php")  ?   "active" :  "" ?>" href="aruba-private-catamaran-tours.php">
                    Aruba Private Catamaran Tours
                  </a>
                  <a class="dropdown-item <?php echo ($get_url=="aruba-private-boats-tours.php")  ?   "active" :  "" ?>" href="aruba-private-boats-tours.php">
                    Aruba Boat Tours
                  </a>
                  
                </div>
              </div>
              
               <!-- 🧡❤💛💙💙💙💕💟❣💕❣ -->
            </li>

            <li class="menu-item-has-children <?php if($get_url=="aruba-rental.php")  {echo "active"; } else {echo "";} ?>">
              <a href="aruba-rental.php"> Aruba Rentals</a>
              <ul class="sub-menu" id="rentalss">
                <li class="<?php echo ($get_url=="aruba-atv-rentals-single-seater.php")  ?   "active" :  "" ?>">
                  <a href="aruba-atv-rentals-single-seater.php"> Aruba ATV Rentals - Single-Seater</a>
                </li>
                <li class="<?php echo ($get_url=="aruba-atv-rentals-double-seater.php") ?  "active" :  "" ?>">
                  <a href="aruba-atv-rentals-double-seater.php">Aruba ATV Rentals - Double-Seater</a>
                </li>
                <li class="<?php if($get_url=="aruba-utv-rentals-two-seater.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-utv-rentals-two-seater.php"> Aruba UTV Rentals - Two-Seater </a>
                </li>
                <li class="<?php if($get_url=="aruba-utv-rentals-four-seater.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-utv-rentals-four-seater.php"> Aruba UTV Rentals - Four-Seater </a>
                </li>
                <li class="<?php if($get_url=="aruba-jet-ski-rentals.php")  {echo "active"; } else {echo "";} ?>">
                  <a href="aruba-jet-ski-rentals.php">Aruba Jet Ski Rentals</a>
                </li>
                
              </ul>
            
              <div class="dropdown absolute_dropdown">
                <a class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <!-- // this is for responsive only -->
                </a>
                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                  <a class="dropdown-item <?php echo ($get_url=="aruba-atv-rentals-single-seater.php")  ?   "active" :  "" ?>" href="aruba-atv-rentals-single-seater.php">Aruba ATV Rentals - Single-Seater</a>
                  <a class="dropdown-item <?php echo ($get_url=="aruba-atv-rentals-double-seater.php") ?  "active" :  "" ?>" href="aruba-atv-rentals-double-seater.php">Aruba ATV Rentals - Double-Seater</a>
                  <a class="dropdown-item <?php echo($get_url=="aruba-utv-rentals-two-seater.php")  ?  "active" : "" ?>" href="aruba-utv-rentals-two-seater.php">Aruba UTV Rentals - Two-Seater</a>
                  <a class="dropdown-item <?php echo($get_url=="aruba-utv-rentals-four-seater.php")  ?  "active" : "" ?>" href="aruba-utv-rentals-four-seater.php"> Aruba UTV Rentals - Four-Seater </a>
                  <a class="dropdown-item <?php echo($get_url=="aruba-jet-ski-rentals.php")  ?  "active" : "" ?>" href="aruba-utv-rentals-four-seater.php"> Aruba Jet Ski Rentals </a>
                </div>
              </div>


            </li>
            <li class="<?php if($get_url=="our-gallery.php")  {echo "active"; } else {echo "";} ?>">
              <a href="our-gallery.php">Our Gallery</a>
            </li>

            <li class="<?php if($get_url=="blogs.php")  {echo "active"; } else {echo "";} ?>">
              <a href="blogs.php">Our Blog</a>
            </li>
            <li class="<?php if($get_url=="contact.php")  {echo "active"; } else {echo "";} ?>">
              <a href="contact.php">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="nav-right-content">
          <ul class="social-icon fistScoial-icons pl-0">
            <li>
              <a class="pinterest" href="#" target="_blank"
                ><i class="fa fa-envelope"></i
              ></a>
            </li>
            <li>
              <a class="twitter" href="#" target="_blank"
                ><i class="fa fa-whatsapp"></i
              ></a>
            </li>
            <li>
              <a class="facebook" href="#" target="_blank"
                ><i class="fa fa-phone"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- navbar area end -->


    <?php
    // some data sending to pages 
    $Rental_cat_file = "aruba-rental.php";
    ?>