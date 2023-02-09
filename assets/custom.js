$(document).ready(function(){

    // Remove page from search
    $('.article-card-wrapper').parent('.grid__item').addClass('removeMe');
  
    // Mobile Menu
    $('.menu-toggler').click(function(){
      $(this).toggleClass('active');
      $('.site-menu').slideToggle();
    });
  // Submenu
  $('.submenu-tog').click(function(){
    $(this).siblings('ul').slideToggle();
  });
  
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
  // Flavor Slider
    $(function(){
        var owlNew = $('.flavorCarousel.owl-carousel');
        owlNew.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<img src='https://cdn.shopify.com/s/files/1/0704/2606/7242/files/angle-left.svg?v=1673345099'>","<img src='https://cdn.shopify.com/s/files/1/0704/2606/7242/files/angle-right.svg?v=1673345107'>"],
            onInitialized  : counter,
            onTranslated : counter,
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
        function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index;     // Position of the current item
            if(item > items) {
                item = item - items
            }
            $('.slider-counter').html("<span>" + item +"</span>" + " " + "/" + " " +items)
        }
    });
    // Slider
    $('.owl-carousel.drink-options').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<img src='https://cdn.shopify.com/s/files/1/0704/2606/7242/files/angle-left.svg?v=1673345099'>","<img src='https://cdn.shopify.com/s/files/1/0704/2606/7242/files/angle-right.svg?v=1673345107'>"],
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
        loop: false,
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
        navText: ["<img src='https://cdn.shopify.com/s/files/1/0704/2606/7242/files/angle-left.svg?v=1673345099'>","<img src='https://cdn.shopify.com/s/files/1/0704/2606/7242/files/angle-right.svg?v=1673345107'>"],
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1.7
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    // Testimonial slider
    
    function mediaSize() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            $(function(){
                $('.testimonials-slider.owl-carousel').owlCarousel({
                    loop: false,
                    margin: 25,
                    nav: false,
                    navText: ["<img src='assets/images/angle-left.svg'>","<img src='assets/images/angle-right.svg'>"],
                    autoplay: false,
                    dots: true,
                    onInitialized:counter,
                    onTranslated:counter,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                function counter(event) {
                  var element = event.target;
                  var items = event.item.count;
                  var item = event.item.index + 2;
                  var sldtxt = $('.active .ivySlideTxt').html();
                  var sldWidth = 100;
                  var sldPercent = sldWidth * item / items;
                  $('#counter').html("0"+item+" / 0"+items);
                  $('.slTxt').html(sldtxt);
                  $('.slideState span').css("width", sldPercent + "%");
                  $('.slideState span').html(sldPercent + "%")
                }
            });
        }
        else if (window.matchMedia('(max-width: 767px)').matches) {
            $(function(){
                $('.testimonials-slider.owl-carousel').owlCarousel({
                    loop: false,
                    margin: 25,
                    nav: false,
                    navText: ["<img src='assets/images/angle-left.svg'>","<img src='assets/images/angle-right.svg'>"],
                    autoplay: false,
                    dots: true,
                    onInitialized:counter,
                    onTranslated:counter,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }
                });
                function counter(event) {
                  var element = event.target;
                  var items = event.item.count;
                  var item = event.item.index + 1;
                  var sldtxt = $('.active .ivySlideTxt').html();
                  var sldWidth = 100;
                  var sldPercent = sldWidth * item / items;
                  $('#counter').html("0"+item+" / 0"+items);
                  $('.slTxt').html(sldtxt);
                  $('.slideState span').css("width", sldPercent + "%");
                  $('.slideState span').html(sldPercent + "%")
                }
            });
        }
        else {
            $(function(){
                $('.testimonials-slider.owl-carousel').owlCarousel({
                    loop: false,
                    margin: 25,
                    nav: false,
                    navText: ["<img src='assets/images/angle-left.svg'>","<img src='assets/images/angle-right.svg'>"],
                    autoplay: false,
                    dots: true,
                    onInitialized:counter,
                    onTranslated:counter,
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
                function counter(event) {
                    var element = event.target;
                    var items = event.item.count;
                    var item = event.item.index + 3;
                    var sldtxt = $('.active .ivySlideTxt').html();
                    var sldWidth = 100;
                    var sldPercent = sldWidth * item / items;
                    $('#counter').html("0"+item+" / 0"+items);
                    $('.slTxt').html(sldtxt);
                    $('.slideState span').css("width", sldPercent + "%");
                    $('.slideState span').html(sldPercent + "%")
                }
            });
        }
      }
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
    
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

 (function () {
      //   let modalshowlat = localStorage.getItem('modalshowlat');        
      //   if (modalshowlat === null) {          
      //     $("#location-modal").modal('show');
      //     $("#location-modal").modal({ backdrop: "static ", keyboard: false });
      //   }

        $('.blogCol-blue').each(function() {
          $(this).add($(this).next('.blogCol-pink')).wrapAll('<div class="blog-row flex jc-sb"></div>')
        });
        
})();  

//wrap the cart main and cart footer section into the wrapper
function wrapSections(section_class) {
    var childSections = document.querySelectorAll("."+section_class);
    var wrapper = document.createElement('div');
    wrapper.classList.add(section_class+"-wrapper");
    childSections.item(0).parentNode.insertBefore(wrapper, childSections.item(0));
    
    for ( var i=0; i< childSections.length; i++){
      wrapper.appendChild(childSections.item(i));
    }
  }
  // You can call this function with a specific section class.
  wrapSections("cart-section");
document.querySelector('.cart-section-wrapper').classList.add('container')


