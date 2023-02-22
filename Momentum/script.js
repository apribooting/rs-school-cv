const player = document.querySelector('.player'),
      playBnt = document.querySelector('.play'),
      prewBnt = document.querySelector('.play-prev'),
      nextBnt = document.querySelector('.play-next'),
      audio = document.querySelector('.audio'),
      playItem = document.querySelector('.play-item'),
      pause = document.querySelector('.pause')

    const songs = ['Aqua', 'Wind','River']
(function () {
    playBnt.addEventListener("click", () => {
        playBnt.classList.toggle("pause");
    });
}())
   