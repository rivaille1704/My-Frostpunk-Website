document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('#tv_swiper', {
        loop: true,
        autoplay: false,
        speed: 0
    });

    const button = document.querySelector('.movie__control button');
    button.addEventListener('click', function () {
        swiper.slideNext();
        console.log("oooo");
        const currentSlide = document.querySelector('.swiper-slide-active img');
        currentSlide.style.animation = 'none';
        setTimeout(() => {
            currentSlide.style.animation = 'CURVE 200ms forwards';
        }, 10);
    });
});
