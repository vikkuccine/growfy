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

class ParallaxScroll {
    constructor() {
       this.scroll()
    }

    scroll() {
        window.addEventListener('scroll', ()=> {
            const target = document.querySelectorAll('.scroll')
            let index = 0;
            let lenght = target.length;

            for(index; index < lenght; index++) {
                let pos = window.scrollY * target[index].dataset.rate;
                target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)'
            }
        })
    }
}

const slider = new Slider();
const parallaxScroll = new ParallaxScroll();