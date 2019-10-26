(function ($) {
    "use strict";
    $("#main-nav").css("display","block");
    // $("#main-nav, #main-nav-subpage").slideDown(700);
    // Initiate superfish on nav menu
    $(window).ready(function() {
        $('#nav-menu').superfish({
            animation: {opacity: 'show'},
            speed: 100
        });
        // $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#main-nav").css("display","block");
    });

    // ========================================================================= //
    //  //SMOOTH SCROLL
    // ========================================================================= //


    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        if ($(this).parent('li').length) {
            $('.animated-icon').toggleClass('open');
        }
        $(document).off("scroll");

        $('a').each(function () {
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        let target = this.hash;

        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top - 80
        }, 800, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });


    function onScroll(event) {
        if ($('.home').length) {
            var scrollPos = $(document).scrollTop();
            $('nav ul li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
            });
        }
    }

    // ========================================================================= //
    //  //NAVBAR SHOW - HIDE
    // ========================================================================= //



    $(document).on('click', '#navbar-toggler', function(e) {
        e.preventDefault();
        $('#nav-menu').slideToggle();
        $('#animated-icon').toggleClass('open');
    });


})(jQuery);