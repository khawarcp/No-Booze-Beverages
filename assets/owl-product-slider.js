// Product Slider
$('.owl-carousel.prodSlider').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
  pagination : true,
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