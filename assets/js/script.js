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
  });