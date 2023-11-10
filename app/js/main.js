class Slider {
    constructor() {
        this.initializeSwiper()
    }

    initializeSwiper() {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false, 
            },
            speed: 5000,
        })
    }

}

const slider = new Slider();