const swiperResources = new Swiper('.resources__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
        500: {
            slidesPerView: 1.5,
            slidesPerGroup: 1.5,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2.8,
            slidesPerGroup: 2.8,
            spaceBetween: 40,
        },
    }
});
const swiperArticles = new Swiper('.articles__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    breakpoints: {
        800: {
            slidesPerView: 1.5,
            slidesPerGroup: 1.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
    }
});

const accordionHeader = document.querySelectorAll('[data-accordion]');

accordionHeader.forEach((item) => {
  item.addEventListener('click', function(){
    this.classList.toggle('active')
    this.closest(".menu-footer").classList.toggle('active')
  })
})