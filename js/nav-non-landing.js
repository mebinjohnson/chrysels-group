(function ($) {
    "use strict";

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {opacity: 'show'},
        speed: 400
    });
    // ========================================================================= //
    //  //SMOOTH SCROLL
    // ========================================================================= //


    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('.animated-icon').toggleClass('open');
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
            if ($(window).width() < 768) {
                $('.nav-menu').slideUp();
            }
        });

        $(this).addClass('active');

        var target = this.hash,
            menu = target;

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
    $("#main-nav, #main-nav-subpage").slideDown(700);
    $("#main-nav-subpage").removeClass('subpage-nav');

    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 100) {
    //         $("#main-nav, #main-nav-subpage").slideDown(700);
    //         $("#main-nav-subpage").removeClass('subpage-nav');
    //     } else {
    //         $("#main-nav").slideUp(700);
    //         $("#main-nav-subpage").hide();
    //         $("#main-nav-subpage").addClass('subpage-nav');
    //     }
    // });

    // ========================================================================= //
    //  // RESPONSIVE MENU
    // ========================================================================= //
    // $('.nav-menu').slideToggle();
    $('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
        $('.animated-icon').toggleClass('open');
    });


})(jQuery);
