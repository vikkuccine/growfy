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
        this.photoScroll()
    }

    scroll() {
        window.addEventListener('scroll', () => {
            const target = document.querySelectorAll('.scroll')
            let index = 0;
            let lenght = target.length;

            for (index; index < lenght; index++) {
                let pos = window.scrollY * target[index].dataset.rate;
                target[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)'
            }
        })
    }

    photoScroll() {
        const bgImage = document.querySelector('.advantages__image-bg')
        const image = document.querySelector('.advantages__image-sm')
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }


        const observerBigImg = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("advantages__image-bg--animated");
                }
            });


        }, options);




        const observerSmallImg = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("advantages__image-sm--animated");
                }
            });
        }, options);

        observerBigImg.observe(bgImage);
        observerSmallImg.observe(image);
    };

}

const slider = new Slider();
const parallaxScroll = new ParallaxScroll();