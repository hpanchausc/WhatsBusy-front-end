$(document).ready(function($) {
    $('.card-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
            breakpoint: 600,
            settings: {
                arrow: true,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    {
            breakpoint: 400,
            settings: {
                arrows: true,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});