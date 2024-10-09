document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-video');
    const video = document.getElementById('video');
    const btnWrap = document.querySelector('.btnWrap');
    const videoImg = document.querySelector('.video-img');

    playButton.addEventListener('click', function(event) {
      // Skryje tlačítka
      videoImg.style.display = 'none';
      btnWrap.style.display = 'none';
      // Spustí video s autoplay
      video.src += '&autoplay=1';

      // Zabrání výchozímu chování
      event.preventDefault();
    });

    const swiper = new Swiper(".swiper-container", {
        slidesPerView: "2.5",
        spaceBetween: 41,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1920: {
              slidesPerView: 2.5,
              spaceBetween: 41
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 41
            },
            664: {
              slidesPerView: 1.5,
              spaceBetween: 15
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 15
            }
          }
      });

      



  });



