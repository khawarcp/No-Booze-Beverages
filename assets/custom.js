$(document).ready(function(){
    // Accordion Tabs
    $(".accordion_head").click(function() {
        $(this).parent('.tab_outer');
        $(this).parent('.tab_outer').toggleClass('active').find('.accordion_body').slideToggle();
        $(this).parent('.tab_outer').siblings().removeClass('active').find('.accordion_body').slideUp();
    });
    // Size Selection
    $('.single-size input:radio').click(function() {
        $('.single-size input:radio[name='+$(this).attr('name')+']').parents('.single-size').removeClass('selected');
        $(this).parents('.single-size').addClass('selected');
    });
    // Slider
    $('.owl-carousel.drink-options').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='assets/images/angle-left.svg'>","<img src='assets/images/angle-right.svg'>"],
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Product Slider
    $('.owl-carousel.prodSlider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Home products slider
    $('.products-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        navText: ["<img src='assets/images/angle-left.svg'>","<img src='assets/images/angle-right.svg'>"],
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    // Home products slider
    $('.testimonials-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 25,
        nav: false,
        navText: ["<img src='assets/images/angle-left.svg'>","<img src='assets/images/angle-right.svg'>"],
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2.5
            }
        }
    });
    
    // Marquee Plugin
    $('.marquee-left').marquee({
        direction: 'left',
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
    $('.marquee-right').marquee({
        direction: 'right',
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });

    // Custom Container
    $('.drink-options').addClass('spacer');
    const space = $('.find-row, .about-banner').position().left;
    console.log(space);
    $('.spacer .owl-dots, .spacer .owl-nav').css('left', space);
    $('.space-left').css('padding-left', space);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 40) {
        $('header').addClass('scroll');
    } else {
        $('header').removeClass('scroll');
    }
});