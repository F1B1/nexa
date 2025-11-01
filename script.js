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
    const menuBg = document.querySelector('.menu-bg')
    burger.addEventListener("click", function(e) {
        headerMenu.classList.toggle('active')
        menuBg.classList.toggle('active')
        document.body.classList.toggle('no-scrolling')
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            headerMenu.classList.remove('active');
            menuBg.classList.toggle('active')
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

    let swiperReviews = new Swiper('.reviews__swiper', {
        direction: "vertical",
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 5500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
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
    
    
    swiperContainer.addEventListener("mouseenter", () => swiperReviews.autoplay.stop());
    swiperContainer.addEventListener("mouseleave", () => swiperReviews.autoplay.start());


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

    window.addEventListener('resize', () => {
        initSwipers()
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

