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
    // // Navigation active state on scroll
    // var nav_sections = $('section');
    // var main_nav = $('.nav-menu, #mobile-nav');
    // var main_nav_height = $('#header').outerHeight()+500;
    //
    // $(window).on('scroll', function () {
    //     var cur_pos = $(this).scrollTop();
    //
    //     nav_sections.each(function() {
    //         var top = $(this).offset().top - main_nav_height,
    //             bottom = top + $(this).outerHeight();
    //
    //         if (cur_pos >= top && cur_pos <= bottom) {
    //             main_nav.find('li').removeClass('menu-active menu-item-active');
    //             main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('menu-active menu-item-active');
    //         }
    //     });
    // });

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

