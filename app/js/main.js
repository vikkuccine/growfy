class Slider {
    constructor() {
        this.initializeSwiper()
    }

    initializeSwiper() {
        const clientsSwiper = new Swiper('.clients__swiper', {
            slidesPerView: 'auto',
            loop: true,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            speed: 5000,
        })
        const commentsSwiper = new Swiper('.comments__swiper', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            loop: true,
            breakpoints: {
                1100: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: false,
                    allowTouchMove: false
                },
            },
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
            },
            speed: 6000,
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
                if (window.innerWidth >= 650) {
                    let pos = window.scrollY * target[index].dataset.rate;
                    target[index].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)'
                } else {
                    target[index].style.transform = 'translate3d(0px, 0px, 0px)'
                }
            }
        })
    }

    photoScroll() {
        const bgImage = document.querySelector('.advantages__image-bg')
        const image = document.querySelector('.advantages__image-sm')
        const expertImg = document.querySelector('.expert__img')
        const expertItemSecond = document.querySelector('.second-card')
        const expertItemThird = document.querySelector('.third-card')
        const expertItemFourth = document.querySelector('.fourth-card')
        const titleBlock = document.querySelectorAll('.header-section__wrap')
        const commentsList = document.querySelector('.comments__swiper')
        const blogList = document.querySelector('.blog__items')

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }

        const optionsItem = {
            root: null,
            rootMargin: '0px 0px -200px 0px',
            threshold: 1
        }

        const optionsBlok = {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.5
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

        const observerExpertImg = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("expert__img--animated");
                }
            });
        }, options);


        const observerExpertSecondItem = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("second-card--animated");
                }
            });
        }, optionsItem);

        const observerExpertThirdItem = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("third-card--animated");
                }
            });
        }, optionsItem);

        const observerExpertFouthItem = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fourth-card--animated");
                }
            });
        }, optionsItem);

        const observerTitleContainer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("header-section__wrap--animated");
                }
            });
        }, options);

        const observerCommentsList = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("comments__swiper--animated");
                }
            });
        }, optionsBlok);

        const observerblogList = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("blog__items--animated");
                }
            });
        }, optionsBlok);

        observerBigImg.observe(bgImage);
        observerSmallImg.observe(image);
        observerExpertImg.observe(expertImg);
        observerExpertSecondItem.observe(expertItemSecond);
        observerExpertThirdItem.observe(expertItemThird);
        observerExpertFouthItem.observe(expertItemFourth)
        titleBlock.forEach(element => {
            observerTitleContainer.observe(element)
        });
        observerCommentsList.observe(commentsList)
        observerblogList.observe(blogList)
    };

}

class BurgerMenu {
    constructor() {
        this.menuBtn = document.querySelector('.burger-menu');
        this.menu = document.querySelector('.menu');
        this.body = document.querySelector('body')
        this.openBurgerMenu()
    }

    openBurgerMenu() {
        this.menuBtn.addEventListener('click', () => {
            this.menuBtn.classList.toggle('burger-menu--open');
            this.menu.classList.toggle('menu--open');
            this.body.classList.toggle('overflow-hidden');
        })
    }
}

const burgerMenu = new BurgerMenu();
const slider = new Slider();
const parallaxScroll = new ParallaxScroll();