document.addEventListener('DOMContentLoaded',()=>{

    document.querySelectorAll('.menu-list-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const burger = document.querySelector('.header__burger')
    const headerMenu = document.querySelector('.header__wrapper')
    const menuLinks = headerMenu.querySelectorAll('.header__link')
    burger.addEventListener("click", function(e) {
        headerMenu.classList.toggle('active')
        document.body.classList.toggle('no-scrolling')
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            headerMenu.classList.remove('active');
            document.body.classList.remove('no-scrolling');
        });
    });


     const faqList = document.querySelector('.faq__list');

    faqList.addEventListener('click', function(e) {
        if (e.target.closest('.faq__button')) {
            const item = e.target.closest('.faq__item');
            const isOpen = item.classList.contains('show');

            document.querySelectorAll('.faq__item.show').forEach(openItem => {
                openItem.classList.remove('show');
            });

            if (!isOpen) {
                item.classList.add('show');
            }
        }
    });


    const swiperContainer = document.querySelector('.reviews__swiper');
    const firstSlide = swiperContainer.querySelector('.swiper-slide:first-child');
    const firstSlideHTML = firstSlide.outerHTML;

    let swiperReviews = new Swiper('.reviews__swiper', {
    direction: "vertical",
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 3000,
    autoplay: {
        delay: 300000,
    },
    pagination: {
        el: ".reviews__pagination",
        clickable: true,
    },
    breakpoints: {
        0: { 
        direction: "horizontal",
        autoplay: false,
        speed: 500,
        },
        769: {
            direction: "vertical",
        },
    },
    });

    function toggleFirstSlide() {
    const isMobile = window.innerWidth <= 768;
    const firstInSwiper = swiperContainer.querySelector('.swiper-slide:first-child');

    if (!isMobile && firstInSwiper && firstInSwiper.matches('.swiper-slide:first-child')) {
        swiperReviews.removeSlide(0);
        } else if (isMobile && !swiperContainer.querySelector('.swiper-slide:first-child')?.isEqualNode(firstSlide)) {
            swiperReviews.prependSlide(firstSlideHTML);
        }
    }


    let swiperWhy = null

    function initSwipers() {
        const width = window.innerWidth

        if (width <= 1024 && !swiperWhy) {
            swiperWhy = new Swiper('.why__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 20,
                pagination: {
                    el: '.why__pagination',
                    clickable: true,
                },
            })
        } else if (width > 1024 && swiperWhy) {
            swiperWhy.destroy(true, true)
            swiperWhy = null
        }

    }

    initSwipers()
    toggleFirstSlide();

    window.addEventListener('resize', () => {
        initSwipers()
        toggleFirstSlide()
    })


})



document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});

