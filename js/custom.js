(function ($) {
    'use strict';

    // :: Index of jQuery Active Code ::
    
    // :: 1.0 Fullscreen Code
    // :: 2.0 Welcome Slider Active Code
    // :: 3.0 Testimonials Slider Active code
    // :: 4.0 Meanmenu active code
    // :: 5.0 Onepage nav active code
    // :: 6.0 Magnific-popup Video active code
    // :: 7.0 counterup active code
    // :: 8.0 ScrollUp active code
    // :: 9.0 Sticky Active code
    // :: 10.0 MatchHeight active code
    // :: 11.0 YouTube video active code
    // :: 12.0 PreventDefault a click
    // :: 13.0 scrollUp active code
    // :: 14.0 Preloader active code

    // :: 1.0 Fullscreen Code
    $(window).on('resizeEnd', function () {
        $(".welcome_area, .welcome_slides .single_slide, .single_slide").height($(window).height());
    });

    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: 2.0 Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="icofont icofont-rounded-left"></i>', '<i class="icofont icofont-rounded-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 500,
            autoplayHoverPause: false
        });
    }

    var owl = $('.welcome_slides');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn.btn-1').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn.btn-2').removeClass('animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .slide_text h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .slide_text h3').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .slide_text .btn.btn-1').addClass('animated custom_slideInUp_btn_1').show();
        $('.owl-item.active .single_slide .slide_text .btn.btn-2').addClass('animated custom_slideInUp_btn_2').show();
    })

    // :: 3.0 Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 800
        });
    }

    // :: 4.0 Meanmenu Active Code
    $('.main_menu_area .mainmenu nav').meanmenu();

    // :: 5.0 Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            changeHash: false,
            scrollSpeed: 1000,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'linear',
            begin: function () {},
            end: function () {},
            scrollChange: function ($currentListItem) {}
        });
    }

    // :: 6.0 Magnific-Popup Video Active Code
    $('.video_btn').magnificPopup({
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
    });

    // :: 7.0 Counterup Active Code
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // :: 8.0 ScrollUp Active Code
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollDistance: 450,
        scrollFrom: 'top',
        scrollSpeed: 500,
        easingType: 'linear',
        animation: 'fade',
        animationSpeed: 200,
        scrollTrigger: false,
        scrollTarget: false,
        scrollText: '<i class="icofont icofont-long-arrow-up"></i>',
        scrollTitle: false,
        scrollImg: false,
        activeOverlay: false,
        zIndex: 2147483647
    });

    // :: 9.0 Sticky Active Code
    $("#sticky").sticky({
        topSpacing: 0
    });

    // :: 10.0 MatchHeight Active Code
    $('.item').matchHeight();

    // :: 11.0 YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // :: 12.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 13.0 Parallax Active Code
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });

    // :: 14.0 Preloader active code
    $(window).load(function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);