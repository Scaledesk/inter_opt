/*
 Theme Name: Atlantida - Creative Multipurpose HTML5 Template
 Theme URL: http://themewar.com/html/atlantida
 Author: ThemeWar
 Author URI: http://themewar.com
 Description: Atlantida - Creative Multipurpose HTML5 Template
 Version: 1.0
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 [01] Intialization
 [02] Revolution Slider
 [03] Recent work carowsel
 [04] Home carowsel
 [05] Our Skills
 [06] Single box slider
 [07] Google map
 [08] Portfolio 2col Mixitup
 [09] Payment Accourdion
 [10] single product view thumbnails
 [11] single shop page zoom
 [12] Fun Fact
 [13] Price Range Slider
 [14] product shop Button
 [15] Shuffle Plugin
 [16] Fixed Header
 [17] Mobile Menu
 [18] parallax
 [19] Wow Js
 [20] load portfolio
 [21] Contact Submit
 [22] Loader
 [23] search icon
 [24] Back To Top

 ==========================================================================*/

(function ($) {
    'use strict';

    //========================
    // Intialization
    //========================
    var tp = $(".tp-banner"),
            cllo = $('#clineLogo'),
            tl = $('.tab_list'),
            fl1 = $('.folio2colWrap'),
            fl2 = $('.folio3colWrap'),
            fl3 = $('.folio4colWrap'),
            fl4 = $('.filterParent'),
            pt = $('#parentSingleItems'),
            parallax1 =  $('#Collection_parallax'),
            parallax3 = $('#homeShoptestimonial_paralux'),
            parallax4 = $('#feature_paralux'),
            parallax5 = $('#feature_paralux_services'),
            parallax6 = $('#contact_paralux'),
            parallax7 = $('#portfolio_paralux'),
            parallax8 = $('#portfolio_single_paralux'),
            parallax9 = $('#blog_paralux'),
            parallax10 = $('#blog_single_paralux'),
            parallax11 = $('#shop_paralux'),
            zo = $('#zoom_01'),
            zo = $('#Collection_parallax'),
            rec = $('#recentWorkImg-carowsel');


    //=========================
    // Revolution Slider
    //=========================
//    if (tp.length > 0)
//    {
//        tp.revolution({
//            delay: 8000,
//            startwidth: 1170,
//            startheight: 651,
//            startWithSlide: 0,
//            fullScreenAlignForce: "off",
//            navigationType: "bullet",
//            navigationArrows: "on",
//            navigationStyle: "round",
//            touchenabled: "on",
//            onHoverStop: "on",
//            navOffsetHorizontal: 0,
//            navOffsetVertical: 20,
//            shadow: 0,
//            fullWidth: "off",
//            fullScreen: "on",
//            navigationVOffset: 35
//        });
//    }

    //========================
    // Recent work carowsel
    //========================
    if (rec.length > 0) {
        rec.slick({
            centerMode: true,
            slidesToShow: 1,
            centerPadding: '280px',
            dots: false,
            responsive: [
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '30px',
                        dots: false
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '70px',
                        dots: false
                    }
                }
            ]
        });
    }


    //=========================
    // Home carowsel
    //=========================
    if (cllo.length > 0) {
        cllo.owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }
    ;

    //========================
    // Our Skills
    //========================
    if ($(".ourSkills").length > 0)
    {
        $('.ourSkills').appear();
        $('.ourSkills').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".singleSkill").each(function () {
            var datacount = $(this).attr("data-limit");
            $(".skillBar", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('.skilPercent').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }


    //=======================================================
    // Home 3 Video Section
    //=======================================================
    var vid1 = document.getElementById("myVideo1");
    function playPause1() {
        if (vid1.paused) {
            vid1.play();
        } else {
            vid1.pause();
        }
    }
    if ($("#videoWrap1").length > 0)
    {
        $('#playVideos').on('click', function (e) {
            e.preventDefault();
            playPause1();
            if ($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                vid1.pause();
            } else
            {
                $(this).addClass('active');
                vid1.play();
            }
        });
    }
    ;


    //======================================
    // Single box slider
    //=======================================
    if (tl.length > 0) {
        tl.bxSlider({
            mode: 'vertical',
            auto: false,
            adaptiveHeight: true,
            minSlides: 3,
            controls: true,
            pager: false
        });
    }
    ;

    //=======================================================
    // Google map
    //=======================================================
//    if ($('#map').length > 0) {
//        var map;
//        map = new GMaps({
//            el: '#map',
//            lat: 51.4584218,
//            lng: -0.0813982,
//            zoomControlOpt: {
//                style: 'SMALL',
//                position: 'TOP_LEFT'
//            },
//            scrollwheel: false,
//            zoom: 16,
//            zoomControl: false,
//            panControl: false,
//            streetViewControl: false,
//            mapTypeControl: false,
//            overviewMapControl: false,
//            clickable: false
//        });
//        map.addMarker({
//            lat: 51.4584218,
//            lng: -0.0813982
//        });
//    }

    //=======================================================
    // Portfolio 2col Mixitup
    //=======================================================
    $(function () {
        fl1.themeWar();
    });
    $(function () {
        fl2.themeWar();
    });
    $(function () {
        fl3.themeWar();
    });
    $(function () {
        fl4.themeWar();
    });

    //=======================================================
    // Payment Accourdion
    //=======================================================
    if ($(".wc_payment_methods").length > 0)
    {
        $(".wc_payment_methods li").each(function () {
            $('input[type="radio"]', this).on('click', function (e) {
                var ids = $(this).attr('id');
                if ($('div.' + ids).hasClass('visibales'))
                {

                } else
                {
                    $(".payment_box").removeClass('visibales');
                    $(".payment_box").slideUp('fast');
                    $('div.' + ids).slideDown('fast').addClass('visibales');
                }
            });
        });
    }


    //======================================
    // single product view thumbnails
    //=======================================
    if (pt.length > 0) {
        pt.owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: false
        });
    }
    ;

    //=========================
    // single shop page zoom
    //=========================
    if (zo.length > 0) {
        zo.elevateZoom({
            cursor: "pointer",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 200,
            easing: true,
            zoomWindowWidth: 250,
            zoomWindowHeight: 250
        });
    }
    ;

    //========================================================
    // Fun Fact
    //========================================================
    var skl = true;
    $('.funfactsSec').appear();
    $('.funfactsSec').on('appear', function () {
        if (skl)
        {
            $('.counting').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    //=========================
    // Price Range Slider
    //=========================
    if ($("#slider-range").length > 0) {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [10, 250],
            slide: function (event, ui) {
                $("#minamount").html("$" + ui.values[ 0 ]);
                $("#maxamount").html("$" + ui.values[ 1 ]);
            }
        });
        $("#minamount").html("$" + $("#slider-range").slider("values", 0));
        $("#maxamount").html("$" + $("#slider-range").slider("values", 1));

    }
    ;

    //=======================================================
    // product shop Button
    //=======================================================
    if ($(".quantity_btn").length > 0)
    {
        $(".quantity_btn").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }


    //=======================================================
    // Shuffle Plugin
    //=======================================================
    if ($("#grid").length > 0)
    {

        $(window).load(function () {
            var $grid = $('#grid');
            $grid.shuffle({
                itemSelector: '.item' // the selector for the items in the grid
            });
            /* reshuffle when user clicks a filter item */
            $('#mas_nav li').on('click', function () {

                // set active class
                $('#mas_nav li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        });
    }

    //===================================
    // Fixed Header
    //===================================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100)
        {
            $("#fix_header").addClass('fixedHeader');
        } else
        {
            $("#fix_header").removeClass('fixedHeader');
        }
    });

    //========================
    // Mobile Menu
    //========================
    if ($('.moblieMenu').length > 0) {
        $('.moblieMenu').on('click', function () {
            $(this).toggleClass('active');
            $('.navMenu > ul').slideToggle('slow');
        });
        if ($(window).width() < 768)
        {
            $(".has-menu-items a").on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
            });
        }
    }
    ;

    //========================
    // parallax
    //========================
    parallax1.parallax({imageSrc: 'images/bg/10.jpg'});
    parallax3.parallax({imageSrc: 'images/bg/14.jpg'});
    parallax4.parallax({imageSrc: 'images/bg/3.jpg'});
    parallax5.parallax({imageSrc: 'images/bg/6.jpg'});
    parallax6.parallax({imageSrc: 'images/bg/4.jpg'});
    parallax7.parallax({imageSrc: 'images/bg/13.jpg'});
    parallax8.parallax({imageSrc: 'images/bg/5.jpg'});
    parallax9.parallax({imageSrc: 'images/bg/bg1.jpg'});
    parallax10.parallax({imageSrc: 'images/bg/8.jpg'});
    parallax11.parallax({imageSrc: 'images/bg/9.jpg'});


    //========================
    // Wow Js
    //========================
    new WOW().init();


    //========================
    // load portfolio
    //========================
    if ($('.carouselDot').length > 0)
    {
        $('.carouselDot').on('click', function ()
        {
            var $this = $(this);
            $this.addClass('carousel_active');
            var filename = $this.attr('data-filename');
            var append_div = $this.attr('data-append');
            setTimeout(function () {
                $.get(filename, function (response) {
                    $("." + append_div).append(response);
                    $this.removeClass('carousel_active');
                });
            }, 3000);

        });
    }


    //========================
    // Contact Submit
    //========================
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function (e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var name = $("#name").val();
            var email = $("#email").val();
            var subject = $("#subject").val();


            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                } else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/mail.php',
                    data: {con_name: con_name, con_email: con_email, con_message: con_message},
                    success: function (data)
                    {
                        $("#con_submit").html('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                    }
                });
            } else
            {
                $("#con_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function () {
            $(this).removeClass('reqError');
        });
    }
    ;

    //========================
    // Loader
    //========================
    $(window).load(function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    //========================
    // search icon
    //========================
    var ser = true;
    $('#searchIcon').on('click', function (e) {
        e.preventDefault();
        if (ser)
        {
            $('.searchbarInner').fadeIn();
            ser = false;
        } else
        {
            $('.searchbarInner').fadeOut();
            ser = true;
        }
    });
    //========================
    // Back To Top
    //========================
    if ($('#backToTop').length) {
        var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#backToTop').addClass('showit');
                    } else {
                        $('#backToTop').removeClass('showit');
                    }
                };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#backToTop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

})(jQuery);

$(document).ready(function () {
		/* slider revolution */
		var tpj = jQuery;
		var revapi626;
		tpj(document).ready(function () {
			if (tpj("#rev_slider_626_1").revolution == undefined) {
				revslider_showDoubleJqueryError("#rev_slider_626_1");
			}
			else {
				revapi626 = tpj("#rev_slider_626_1").show().revolution({
					sliderType: "standard"
					, jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/"
					, sliderLayout: "fullscreen"
					, dottedOverlay: "none"
					, delay: 9000
					, navigation: {
						keyboardNavigation: "off"
						, keyboard_direction: "horizontal"
						, mouseScrollNavigation: "off"
						, mouseScrollReverse: "default"
						, onHoverStop: "off"
						, touch: {
							touchenabled: "on"
							, swipe_threshold: 75
							, swipe_min_touches: 1
							, swipe_direction: "horizontal"
							, drag_block_vertical: false
						}
						, arrows: {
							style: "metis"
							, enable: true
							, hide_onmobile: false
							, hide_onleave: false
							, tmp: ''
							, left: {
								h_align: "left"
								, v_align: "center"
								, h_offset: 0
								, v_offset: 0
							}
							, right: {
								h_align: "right"
								, v_align: "center"
								, h_offset: 0
								, v_offset: 0
							}
						}
					}
					, responsiveLevels: [1240, 1024, 778, 480]
					, visibilityLevels: [1240, 1024, 778, 480]
					, gridwidth: [1240, 1024, 778, 480]
					, gridheight: [900, 768, 960, 720]
					, lazyType: "single"
					, parallax: {
						type: "mouse"
						, origo: "slidercenter"
						, speed: 300
						, levels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 49, 50, 51, 55]
						, type: "mouse"
					, }
					, shadow: 0
					, spinner: "spinner2"
					, stopLoop: "on"
					, stopAfterLoops: 0
					, stopAtSlide: 1
					, shuffle: "off"
					, autoHeight: "off"
					, fullScreenAutoWidth: "off"
					, fullScreenAlignForce: "off"
					, fullScreenOffsetContainer: ""
					, fullScreenOffset: ""
					, disableProgressBar: "on"
					, hideThumbsOnMobile: "off"
					, hideSliderAtLimit: 0
					, hideCaptionAtLimit: 0
					, hideAllCaptionAtLilmit: 0
					, debugMode: false
					, fallbacks: {
						simplifyAll: "off"
						, nextSlideOnWindowFocus: "off"
						, disableFocusListener: false
					, }
				});
			}
		}); /*ready*/
	});

/*smooth scroll*/

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/*
client logo slider*/

