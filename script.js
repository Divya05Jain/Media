document.addEventListener('DOMContentLoaded', function () {
    var swiperElement = document.querySelector('.swiper-wrapper');
    var slidesCount = swiperElement.children.length;

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: slidesCount < 4 ? slidesCount : 4,
      spaceBetween: 40,
      loop: slidesCount >= 4,
      autoplay: slidesCount >= 4 ? {
        delay: 1000,
        disableOnInteraction: false,
      } : false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function () {
          adjustSlides();
        },
      },
    });
    document.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
      });
      slide.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
      });
    });

    function adjustSlides() {
      if (slidesCount < 4) {
       
        var totalWidth = 0;
        document.querySelectorAll('.swiper-slide').forEach(slide => {
          totalWidth += slide.offsetWidth;
        });
        var wrapperWidth = document.querySelector('.swiper').offsetWidth;
        var marginLeft = (wrapperWidth - totalWidth) / 2;
        swiperElement.style.justifyContent = 'center';
        swiperElement.style.marginLeft = marginLeft + 'px';
      }
    }
  });