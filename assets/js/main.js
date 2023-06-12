;(function($){
    "use strict";



    

    /* ********************************************
        14. Background Youtube Video 
    ******************************************** */
    if($('.youtube-bg').length){
        $(".youtube-bg").YTPlayer({
            videoURL: "Sz_1tkcU0Co",
            containment: '.youtube-bg',
            mute: true,
            loop: true,
            startAt: 7,
            showControls: false,
            showYTLogo: false
        });
    }

    $(document).ready(function(){

    
        /*------------------------------------------------------
            Navbar fix
        -------------------------------------------------------*/
        
        $(window).on('scroll', function () {
    
            var ScrollTop = $('.back-to-top');           

            if($(window).scrollTop() >= 200){
                ScrollTop.fadeIn(100);            
            }else {
                ScrollTop.fadeOut(100);
            }
          
            // this for header            

            if($(window).scrollTop() > 100){
                
                $(".navbar-area").css('position','fixed')
         
            }else{

                $(".navbar-area").css('position','relative')
         
            }



        });



        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#tp_imagePreview').css('background-image', 'url('+e.target.result +')');
                    $('#tp_imagePreview').hide();
                    $('#tp_imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#tp_imageUpload").change(function() {
            readURL(this);
        });



        /* -------------------------------------------------------------
            menu show Form
        ------------------------------------------------------------- */
        if ( $(window).width() > 991 ) {
            if ($('.dropdown-menu-btn').length){
                $(".dropdown-menu-btn").on('click', function(){
                    $(".navbar-nav").fadeToggle("navbar-nav-show", "linear");
                    $('.dropdown-menu-btn').toggleClass('open');
                });

                $('body').on('click', function(event) {
                    if (!$(event.target).closest('.dropdown-menu-btn').length && !$(event.target).closest('.navbar-nav').length) {
                        $(".navbar-nav").fadeOut("navbar-nav-show");
                    }
                    if (!$(event.target).closest('.dropdown-menu-btn').length && !$(event.target).closest('.navbar-nav').length) {
                        $('.dropdown-menu-btn').removeClass('open');
                    }
                });
            }
        }


        /*------------------------------------------------------
            wow js init
        -------------------------------------------------------*/
        // new WOW().init();

        /*------------------------------------------------------
            select onput
        -------------------------------------------------------*/
        if ($('.select').length){
            $('.select').niceSelect();
        }

        $('.tp-search-single-wrap select').on('change', function() {
            $(".current").addClass('new-current');
        });



        /*=======================================
        Product page slider start
        =========================================*/
        


        var $slider_product = $('.slider_product');
        $slider_product.slick({
            slidesToShow: 4,
            dots: true,
            slidesToScroll: 4,
            speed: 400,
            loop: true,
            fade: false,
            autoplay: true,
            autoplaySpeed: 9000,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendDots:$(".banner-slider-dots"),
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll:3,
                        centerPadding: "10px",
                        
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll:2,
                        centerPadding: "10px",
                        
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1,
                        centerPadding: "10px",
                        
                    }
                }
            ]
        });





        var $banner_slider = $('.banner-slider');
        $banner_slider.slick({
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            speed: 400,
            loop: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 9000,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendDots:$(".banner-slider-dots"),
        });

  
        //active count list
        $(".banner-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            var firstNumber = check_number(++nextSlide);
            $(".banner-slider-controls .slider-extra .text .first").text(firstNumber);
        });
        var smSlider = $(".banner-slider").slick("getSlick");
        var smSliderCount = smSlider.slideCount;
        $(".banner-slider-controls .slider-extra .text .last").text(check_number(smSliderCount));
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }


        /* -------------------------------------------------------------
            swiper-slider
        ------------------------------------------------------------- */            
        var swiper = new Swiper('.banner-slider-two', {
            mode:'horizontal',
            loop: true,
            autoHeight: true,
            speed: 950,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            coverflowEffect: {
                rotate: -10,
                stretch: 110,
                depth: 120,
                modifier: 1,
                slideShadows : false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-buttons-next',
                prevEl: '.swiper-buttons-prev',
            },
        });

        



        /* -----------------------------------------------------
            destination list slider
        ----------------------------------------------------- */
        var $d_list_slider = $('.destinations-list-slider');
        $d_list_slider.slick({
            slidesToShow: 3,
            dots: false,
            slidesToScroll: 1,
            speed: 400,
            loop: true,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendArrows: $('.destinations-slider-controls .slider-nav'),
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "10px",
                        
                    }
                }
            ]
        });


        
        //active progress
        var $progressBar_F = $('.d-list-progress_F');
        var $progressBarLabel_F = $( '.slider__label_F' );
        //active count list
        $(".destinations-list-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            var firstNumber = check_number(++nextSlide);
            $(".destinations-slider-controls .slider-extra .text .first").text(firstNumber);
            var calc = ( (nextSlide) / (slick.slideCount) ) * 100;
                 $progressBar_F
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );
                $progressBarLabel_F.text( calc + '% completed' );
        });
        var smSlider = $(".destinations-list-slider").slick("getSlick");
        var smSliderCount = smSlider.slideCount;
        $(".destinations-slider-controls .slider-extra .text .last").text(check_number(smSliderCount));
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }


        var $payment_slider = $('.payment-options-list');
        $payment_slider.slick({
            slidesToShow: 5,
            dots: false,
            margin:10,
            slidesToScroll: 1,
            speed: 500,
            loop: true,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendArrows: $('.payment-slider-controls .slider-nav'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: "10px"
                    }
                }
            ]
        });


        // REplica

        var $d_list_slider = $('.destinations-tour-list-slider');
        $d_list_slider.slick({
            slidesToShow: 3,
            dots: false,
            slidesToScroll: 1,
            speed: 500,
            loop: true,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            appendArrows: $('.destinations-tour-slider-controls .slider-nav'),
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "10px",
                       

                    }
                }
            ]
        });
        //active progress
        var $progressBar = $('.d-list-progress');
        var $progressBarLabel = $( '.slider__label' );
    
        //active count list
        $(".destinations-tour-list-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
            var firstNumber = check_number(++nextSlide);
            $(".destinations-tour-slider-controls .slider-extra .text .first").text(firstNumber);
            var calc = ( (nextSlide) / (slick.slideCount) ) * 100;
                $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );
                $progressBarLabel.text( calc + '% completed' );
        });
        var smSlider = $(".destinations-tour-list-slider").slick("getSlick");
        var smSliderCount = smSlider.slideCount;
        $(".destinations-tour-slider-controls .slider-extra .text .last").text(check_number(smSliderCount));
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }


        var $d_client_review_slider = $('.destinations-client-review-slider');
        $d_client_review_slider.slick({
            slidesToShow: 4,
            dots: false,
            autoplaySpeed: 15000,
            loop: true,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: "10px"
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "10px"
                    }
                }
            ]
        });










        /* -----------------------------------------------------
            upcomming-card-slider
        ----------------------------------------------------- */
        var $upcomming_card_slider_1 = $('.upcomming-card-slider-1');
        $upcomming_card_slider_1.slick({
            slidesToShow: 4,
            dots: false,
            autoplay: true,
            autoplaySpeed: 7000,
            centerMode: true,
            centerPadding: '140px',
            loop: true,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1610,
                    settings: {
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerPadding: '80px',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerPadding: '80px',
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '140px',
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '55px',
                    }
                },
                {
                    breakpoint: 321,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '30px',
                    }
                }
            ]
        });

        /* -----------------------------------------------------
            upcomming-card-slider-2
        ----------------------------------------------------- */
        var $upcomming_card_slider_2 = $('.upcomming-card-slider-2');
        $upcomming_card_slider_2.slick({
            slidesToShow: 3,
            dots: false,
            centerMode: true,
            centerPadding: '8px',
            autoplay: true,
            autoplaySpeed: 7000,
            loop: true,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });


        /* -----------------------------------------------------
            upcomming-card-slider-2
        ----------------------------------------------------- */
        var $upcomming_card_slider_3 = $('.upcomming-card-slider-3');
        $upcomming_card_slider_3.slick({
            slidesToShow: 4,
            dots: false,
            autoplay: true,
            autoplaySpeed: 6000,
            loop: true,
            centerMode: true,
            centerPadding: '8px',
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /* -----------------------------------------------------
            upcomming-card-slider-2
        ----------------------------------------------------- */
        var $client_slider = $('.client-slider');
        $client_slider.slick({
            slidesToShow: 3,
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            loop: true,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        /* -----------------------------------------------------
            upcomming-card-slider-2
        ----------------------------------------------------- */
        var $instagram_slider = $('.instagram-slider');
        $instagram_slider.slick({
            slidesToShow: 6,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            loop: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }
            ]
        });


        /* -----------------------------------------------------
            blog-slider
        ----------------------------------------------------- */
        var $blog_slider = $('.blog-slider');
        $blog_slider.slick({
            slidesToShow: 2,
            dots: false,
            autoplay: true,
            margin: 30,
            autoplaySpeed: 5000,
            loop: true,
            prevArrow: '<span class="slick-prev"><i class="la la-long-arrow-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="la la-long-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /* -----------------------------------------------------
            upcomming-card-slider
        ----------------------------------------------------- */
        if ($('.gallery-slider').length){
            $('.gallery-slider').owlCarousel({
                items: 3,
                smartSpeed:450,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: false,
                dots: false,
                smartSpeed: 1500,
                margin: 30,
                responsive: {
                    0: {
                        items: 2,
                        margin: 20,
                    },
                    767: {
                        items: 2,
                        margin: 20,
                    },
                    768: {
                        items: 3,
                        margin: 20,
                    },
                }
            });
        }


        /* -------------------------------------------------------------
            swiper-slider
        ------------------------------------------------------------- */            
        var swiper = new Swiper('.client-slider-two', {
            mode:'horizontal',
            loop: true,
            speed: 950,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            nextButton: '.arrow-right',
            prevButton: '.arrow-left',
            coverflowEffect: {
                rotate: -10,
                stretch: 110,
                depth: 120,
                modifier: 1,
                slideShadows : false,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-buttons-next',
                prevEl: '.swiper-buttons-prev',
            },
        });

        /*--------------------------------------------------------
            Jarallax Active Code
        --------------------------------------------------------*/
        if ($.fn.jarallax) {
            $('.jarallax').jarallax({
                speed: 0.5
            });
        }

        /*--------------------------------------------------------
            search date picker 
        --------------------------------------------------------*/
        if ($('.departing-date').length){
            $(function() {
                $( ".departing-date" ).datepicker();
            });
        }
        if ($('.returning-date').length){
            $(function() {
                $( ".returning-date" ).datepicker();
            });
        }

        /**---------------------------------------
         *  slider-product-sorting
        * -------------------------------------*/
        if($('.slider-product-sorting').length){
            $( function() {
                $( ".slider-product-sorting" ).slider({
                range: true,
                min: 50,
                max: 2000,
                values: [ 50, 1560 ],
                slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
                });
                $( "#amount" ).val( "$" + $( ".slider-product-sorting" ).slider( "values", 0 ) +
                " - $" + $( ".slider-product-sorting" ).slider( "values", 1 ) );
            } );
        }



        /* --------------------------------------------------
            Gallery 
        ---------------------------------------------------- */
        var $galleryFilterArea = $('.gallery-filter-area'),
            $galleryFilterMenu = $('.gallery-filter-menu');
        /*Filter*/
        $galleryFilterMenu.on( 'click', 'button, a', function() {
            var $this = $(this),
                $filterValue = $this.attr('data-filter');
            $galleryFilterMenu.find('button, a').removeClass('active');
            $this.addClass('active');
            $galleryFilterArea.isotope({ filter: $filterValue });
        });
        /*Grid*/
        $galleryFilterArea.each(function(){
            $('.gallery-filter-area .popup-thumb').magnificPopup({
                type:'image',  
                mainClass: 'mfp-zoom-in',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                } 
            });
            var $this = $(this),
            $galleryFilterItem = '.tp-gallery-item';
            $this.imagesLoaded( function() {
                $this.isotope({
                    itemSelector: $galleryFilterItem,
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.gallery-sizer',
                    }
                });
            });
        });
        




        

        /*--------------------------------------------------------
            magnific popup 
        --------------------------------------------------------*/
        $('.video-play-btn').magnificPopup({
            type: 'video',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        // $('.tp-gallery-item-img a').magnificPopup({
        //     type: 'image',
        //     // mainClass: 'mfp-zoom-in',
        // });


        /*------------------------------
            counter js 
        -------------------------------*/
        if($('.count-num').length){
            $('.count-num').counterUp({
                delay: 10,
                time: 5000
            });
        }
        
       
        /*------------------------------------------------------
            Search Popup
        -------------------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','.search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /*--------------------------------------------
            signUp Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var singupPopup = $('#signUp-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            singupPopup.removeClass('active');
        });
        $(document).on('click','.signUp-btn',function(e){
            e.preventDefault();
            singupPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        var ans1 = Math.floor(Math.random() * (9 - 0) + 0);
        $('#ans1').html(ans1);
        var ans2 = Math.floor(Math.random() * (9 - 0) + 1);
        $('#ans2').html(ans2);
        $('#name').on('keypress click keypress input blur paste', function(e) {
            var keyCode = e.which;
            var name_err = true;
            var name = $(this).val();
            if(keyCode) {
                if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) ) && keyCode != 8 && keyCode != 32) {
                    e.preventDefault();
                    return false;
                }
                else {
                    $('#name_err').html('');
                    name_err=false;
                    $('#name').css('color','#468847');
                    $('#name').css('background-color','#dff0d8');
                    $('#name').css('border','#1px solid #d6e9c6');
                    return true;
                }
            }
            else if(name.length == 0) {
                $('#name').css('color','#b94a48');
                //$('#name_err').html('This Field is required.');
                name_err = true;
                $('#name').css('background-color','#f2dede');
                $('#name').css('border','#1px solid #eed3d7');
            }
        });


       // custom code by amar sir
       var input = document.querySelector("#phoneno");
       const iti = window.intlTelInput(input, {
           utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
           separateDialCode: true,
           autoPlaceholder: "aggressive",
           initialCountry:"us",
           geoIpLookup:"auto",     

       });
        $("#phoneno").on('open:countrydropdown', function () {
            // Do stuffs here...
            $('.iti__country-list').prepend('<li class="intcounSearch"><input type="text" placeholder="Search Country" class="countrySearch" /></li>');
        });
        $("#phoneno").on('close:countrydropdown', function () {
            // Do stuffs here...
            $('.iti__country-list').find('.intcounSearch').remove();
        });
        $('body').click(function(e) {
            var target = $(e.target);
            // alert(target);
            if (target.is('.intcounSearch .countrySearch')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
        
        $('.countrySearch').on('keyup', function(){
            alert($(this).val());
        });

        $('#phoneno').on('keypress click keypress input blur paste', function(e) {
           
            if (input.value.trim()) {
                if (iti.isValidNumber()) {
                    // e.preventDefault();
                    // return false;
                    $('#phoneno_err').html('');
                    $('#phoneno').css('color', '#468847');
                    $('#phoneno').css('background-color', '#dff0d8');
                    $('#phoneno').css('border', '#1px solid #d6e9c6');
                    //    name_err = false;
                    return true;
                } else {
                     /* $('#LastName_err').html('This Field is required.');*/
                $('#phoneno').css('color', '#b94a48');
                $('#phoneno').css('background-color', '#f2dede');
                $('#phoneno').css('border', '#1px solid #eed3d7');
                //name_err = false;
                }
            } 
        });
        $('#emailid, #newsletteremail').on('keypress', function(e) {
            var format = new RegExp(/[ `!#$%^&*()+\=\[\]{};':"\\|,<>\/?~]/);
            var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            // console.log(key);
            // var $this = $(this);
            // var email = $this.val();
            if (format.test(key)) {
               e.preventDefault();
               return false;
            }
        });
        $('#emailid, #newsletteremail').on('keyup keypress click', function(e) {
            var $this = $(this);
            // var email = $('#emailid').val();
            var email = $this.val();
            var email_err = true;
            
            if(email.length > 0) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                // var emailReg = /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
                if( !emailReg.test(email)) {
                    email_err = true;
                    // console.log('error');
                    /* $('#emailid_err').html('Please enter a valid email address');*/                    
                } else {
                    email_err = false;
                    $('#emailid_err').html('');
                }                
            } else {
                /*$('#emailid_err').html('This Field is required.');*/
                email_err = true;                
            }
        
            if(email_err){
                $this.css('color','#b94a48');
                $this.css('background-color','#f2dede');
                $this.css('border','#1px solid #eed3d7');
            } else {
                $this.css('color','#468847');
                $this.css('background-color','#dff0d8');
                $this.css('border','#1px solid #d6e9c6');
            }
            $('#confirm_email').trigger('click');
        });
        $('#confirm_email').on('keyup keypress click', function(e) {
            var confirm_email = $('#confirm_email').val();
            var email = $('#emailid').val();
            var confirm_email_err = true;
            if(confirm_email.length > 0) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if( !emailReg.test(confirm_email)) {
                    confirm_email_err = true;
                    /*$('#confirm_email_err').html('Please enter a valid email address');*/
                    $('#confirm_email').css('color','#b94a48');
                    $('#confirm_email').css('background-color','#f2dede');
                    $('#confirm_email').css('border','#1px solid #eed3d7');
                } else {
                    if(confirm_email!=email) {
                        confirm_email_err = true;
                        /*$('#confirm_email_err').html('Please enter same email address.');*/
                        $('#confirm_email').css('color','#b94a48');
                        $('#confirm_email').css('background-color','#f2dede');
                        $('#confirm_email').css('border','#1px solid #eed3d7');
                    }
                    else if(confirm_email==email) {
                        confirm_email_err = false;
                        $('#confirm_email_err').html('');
                        $('#confirm_email').css('color','#468847');
                        $('#confirm_email').css('background-color','#dff0d8');
                        $('#confirm_email').css('border','#1px solid #d6e9c6');
                    }
                }
            } else {
                /*$('#confirm_email_err').html('This Field is required.');*/
                confirm_email_err = true;
                $('#confirm_email').css('color','#b94a48');
                $('#confirm_email').css('background-color','#f2dede');
                $('#confirm_email').css('border','#1px solid #eed3d7');
            }
        });
        $('#message').on('keyup keypress click', function(e) {
            var message = $('#message').val();
            if(message.length > 0) {
                $('#message_err').html('');
                $('#message').css('color','#468847');
                $('#message').css('background-color','#dff0d8');
                $('#message').css('border','#1px solid #d6e9c6');
            } else {
                /* $('#message_err').html('This Field is required');   */
                $('#message').css('color','#b94a48');
                $('#message').css('background-color','#f2dede');
                $('#message').css('border','#1px solid #eed3d7');
            }
        });
        $('#answer').on('keyup keypress click input blur paste', function(e) {
            $(this).val($(this).val().replace(/\D/g, ''));
            var answer = $('#answer').val();
            if(answer.length > 0) {
                var ans1 = $('#ans1').text();
                var ans2 = $('#ans2').text();
                var answw = parseInt(ans1)+parseInt(ans2);
                if(answer!=answw) {
                    /*$('#answer_err').html('Please enter correct answer.');   */
                    $('#answer').css('color','#b94a48');
                    $('#answer').css('background-color','#f2dede');
                    $('#answer').css('border','#1px solid #eed3d7');
                } else {
                    $('#answer_err').html('');
                    $('#answer').css('color','#468847');
                    $('#answer').css('background-color','#dff0d8');
                    $('#answer').css('border','#1px solid #d6e9c6');
                }
            } else {
                /* $('#answer_err').html('This Field is required');   */
                $('#answer').css('color','#b94a48');
                $('#answer').css('background-color','#f2dede');
                $('#answer').css('border','#1px solid #eed3d7');
            }
        });
        $('#submit_contact').click(function(e){
            var name = $('#name').val();
            var name_err = true;
            var email = $('#emailid').val();
            var email_err = true;
            var confirm_email = $('#confirm_email').val();
            var confirm_email_err = true;
            var phoneno = $('#phoneno').val();
            var phoneno_err=true;
            var message = $('#message').val();
            var message_err = true;
            var answer = $('#answer').val();
            var answer_err = true;
            if(name.length > 0) {
                $('#name_err').html('');
                $('#name').css('color','#468847');
                $('#name').css('background-color','#dff0d8');
                $('#name').css('border','#1px solid #d6e9c6');
                name_err = false;
            } else {
                /*$('#name_err').html('This Field is required.');*/
                $('#name').css('color','#b94a48');
                $('#name').css('background-color','#f2dede');
                $('#name').css('border','#1px solid #eed3d7');
                name_err = true;
            }
            if(email.length > 0) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if( !emailReg.test(email)) {
                    email_err = true;
                    /* $('#emailid_err').html('Please enter a valid email address');*/
                    $('#emailid').css('color','#b94a48');
                    $('#emailid').css('background-color','#f2dede');
                    $('#emailid').css('border','#1px solid #eed3d7');
                } else {
                    email_err = false;
                    $('#emailid_err').html('');
                    $('#emailid').css('color','#468847');
                    $('#emailid').css('background-color','#dff0d8');
                    $('#emailid').css('border','#1px solid #d6e9c6');
                }
            } else {
                $('#emailid').css('color','#b94a48');
                $('#emailid').css('background-color','#f2dede');
                $('#emailid').css('border','#1px solid #eed3d7');
                /*$('#emailid_err').html('This Field is required.');*/
                email_err = true;
            }
            if(confirm_email.length > 0) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if( !emailReg.test(confirm_email)) {
                    confirm_email_err = true;
                    /*$('#confirm_email_err').html('Please enter a valid email address');*/
                    $('#confirm_email').css('background-color','#f2dede');
                    $('#confirm_email').css('border','#1px solid #eed3d7');
                } else {
                    if(confirm_email!=email) {
                        confirm_email_err = true;
                        /*$('#confirm_email_err').html('Please enter same email address.');*/
                        $('#confirm_email').css('color','#b94a48');
                        $('#confirm_email').css('background-color','#f2dede');
                        $('#confirm_email').css('border','#1px solid #eed3d7');
                    } else if(confirm_email==email) {
                        confirm_email_err = false;
                        $('#confirm_email_err').html('');
                        $('#confirm_email').css('color','#468847');
                        $('#confirm_email').css('background-color','#dff0d8');
                        $('#confirm_email').css('border','#1px solid #d6e9c6');
                    }
                }
            } else {
                /*$('#confirm_email_err').html('This Field is required.');*/
                confirm_email_err = true;
                $('#confirm_email').css('color','#b94a48');
                $('#confirm_email').css('background-color','#f2dede');
                $('#confirm_email').css('border','#1px solid #eed3d7');
            }

             if(input.value.trim())
             console.log(!iti.isValidNumber())

            if(iti.isValidNumber()) {
                input.classList.remove("error");
                $('#phoneno_err').html('');
                phoneno_err = false;
                $('#phoneno').css('color','#468847');
                $('#phoneno').css('background-color','#dff0d8');
                $('#phoneno').css('border','#1px solid #d6e9c6');
            } else {
                $('#phoneno_err').html('Enter a valid number.');  
                phoneno_err = true;
                $('#phoneno').css('color','#b94a48');
                $('#phoneno').css('background-color','#f2dede');
                $('#phoneno').css('border','#1px solid #eed3d7');
                input.classList.add("error");
            }
            if(message.length > 0) {
                $('#message_err').html('');
                message_err = false;
                $('#message').css('color','#468847');
                $('#message').css('background-color','#dff0d8');
                $('#message').css('border','#1px solid #d6e9c6');
            } else {
                /*$('#message_err').html('This Field is required');*/ 
                message_err = true;
                $('#message').css('color','#b94a48');
                $('#message').css('background-color','#f2dede');
                $('#message').css('border','#1px solid #eed3d7');
            }
                var answer = $('#answer').val();
                var ans1 = $('#ans1').text();
                var ans2 = $('#ans2').text();
                var answw = parseInt(ans1)+parseInt(ans2);
            if(answer == answw) {
                $('#answer_err').html('');
                answer_err = false;
                $('#answer').css('color','#468847');
                $('#answer').css('background-color','#dff0d8');
                $('#answer').css('border','#1px solid #d6e9c6');
            } else {
                $('#answer_err').html('Enter a valid answer.');
                answer_err = true;
                $('#answer').css('color','#b94a48');
                $('#answer').css('background-color','#f2dede');
                $('#answer').css('border','#1px solid #eed3d7');
            }

            if(name_err==false && email_err==false && confirm_email_err==false && phoneno_err==false && message_err==false && answer_err==false) {
                $.ajax({
                    url:'contactusmailer.php',
                    type:'post',
                    data:{'name':name,'email':email,'phoneno':phoneno,'message':message},
                    success:function(data){
                        console.log(data);
                        if(data=='success'){
                            $('#message_contact_toggle').show();
                            $('#contactsuccessstatus').html('Thank You For Your Email!');
                            setTimeout(function(){ $('#contactsuccessstatus').html(''); }, 50000);
                            /*        $('#form_contact')[0].reset();*/
                            $('#form_contact').trigger("reset");
                            $('input,textarea,select').css("background-color","#F8F8F8");
                            /* $('.formcon').load(' .formcon')*/
                        } else if(data=='error'){
                            $('#contacterrstatus').html('Something went wrong!');
                            setTimeout(function(){ $('#contacterrstatus').html(''); }, 50000);
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            } else if(name_err==true && email_err==true && confirm_email_err==true && phoneno_err==true && message_err==true) {
               
            }
        });
               


    });
           

    $(window).on('load',function(){
        /*--------------------------------
            preloader
        ---------------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);

        /*--------------------------------
            Cancel Preloader
        ---------------------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });
    });

    /*------------------------------------------------------
        back to top
    -------------------------------------------------------*/
    $(document).on('click', '.back-to-top', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    /* -------------------------------------------------------------
        inner linking js
    ------------------------------------------------------------- */
    if ($('.scroll-down a[href^="#"]').length){
        $('.scroll-down a[href^="#"]').not("#scrollUp").on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            $('html, body').stop().animate({
                 'scrollTop': $target.offset().top - 80
            }, 900, 'swing');
        });
    }
    $('.line-col a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 100
        }, 900, 'swing');
    });
    

    $('.newslettersubscribe').click(function(e){
     //    alert('hello');
        var newsletteremail = $('#newsletteremail').val();
        var newsletteremail_err = true;
        if(newsletteremail.length > 0) {
            var newsemailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if( !newsemailReg.test(newsletteremail)) {
                newsletteremail_err = true;
                $('#emailid_err').html('Please enter a valid email address');
                $('#newsletteremail').css('color','#b94a48');
                $('#newsletteremail').css('background-color','#f2dede');
                $('#newsletteremail').css('border','#1px solid #eed3d7');
            } else {
                newsletteremail_err = false;
                $('#newsletteremail_err').html('');
                $('#newsletteremail').css('color','#468847');
                $('#newsletteremail').css('background-color','#dff0d8');
                $('#newsletteremail').css('border','#1px solid #d6e9c6');
            }
        } else {
            $('#newsletteremail').css('color','#b94a48');
            $('#newsletteremail').css('background-color','#f2dede');
            $('#newsletteremail').css('border','#1px solid #eed3d7');
            /*$('#emailid_err').html('This Field is required.');*/
            newsletteremail_err = true;
        }
        if(newsletteremail_err==false)
        {
            $.ajax({
                url:'newslettermailer.php',
                type:'post',
                data:{'email':newsletteremail},
                success:function(data){
                    if(data=='success'){
                        $('#newlettersuccessstatus').html('Thank You For Your Email!');
                        $('#newlettererrstatus').hide();
                        $('#newlettersuccessstatus').show();
                    
                    }
                    else if(data=='error'){
                        $('#newlettererrstatus').html('Something went wrong!');
                        $('#newlettersuccessstatus').hide();
                        $('#newlettererrstatus').show();
                       
                    }
                }
            });
        }
        else if(newsletteremail_err==true)
        { 
            $('#newlettererrstatus').html('Something went wrong!');
            $('#newlettersuccessstatus').hide();
            $('#newlettererrstatus').show();
        
        }
     });
    

 let stop_copy_paste = document.querySelectorAll('.stop_cp');

 stop_copy_paste.forEach(elm => {
    elm.onpaste = input => input.preventDefault();
 });


//  navigation items active on click

$('.navbar-nav > li').on('click',function(){
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});



$(document).on("click", '[data-toggle="lightbox"]', function(event) {

    event.preventDefault();
  
    $(this).ekkoLightbox();

 $('.ekko-lightbox-nav-overlay a:first-child span').text('');
 $('.ekko-lightbox-nav-overlay a:last-child span').text('');
    
  
  });






//  to add active  class in naviagtion on prernt class ✅

  let has_childs = document.querySelectorAll(".menu-item-has-children ul li");

  has_childs.forEach(childs => {
   if( childs.classList == 'active'){
    let Perent_name = childs.parentElement
    Perent_name.parentElement.classList.add("active");
   }
  });  

})(jQuery);
