$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 20,
        dots: false,
        nav: true,
        navText: [`<img src="assets/images/carousel-prev.svg" class="carouselNavBtn" alt="Prev">`, `<img src="assets/images/carousel-next.svg" class="carouselNavBtn" alt="Next">`],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $(".portfolioItem").hover(function() {
        $(this).addClass("active").removeClass("deactive")
        $(this).siblings().addClass("deactive").removeClass("active");
    }, function() {
        $(this).removeClass("deactive active")
        $(this).siblings().removeClass("deactive active");
    });
});