import playList from './playList.js';

const player = document.querySelector('.player'),
      playBnt = document.querySelector('.play'),
      prewBnt = document.querySelector('.play-prev'),
      nextBnt = document.querySelector('.play-next'),
      audio = document.querySelector('.audio'),
      playItem = document.querySelectorAll('.play-item'),
      pause = document.querySelector('.pause');
      let song= (playList.length - 3);
      
        audio.src = playList[song].src;
    (function (){
       
    playBnt.addEventListener("click", () => {

        playBnt.classList.toggle("pause");
        playItem[0].classList.remove('color_red');
        playItem[1].classList.remove('color_red');
        playItem[2].classList.remove('color_red');
        playItem[song].classList.toggle('color_red');
        
        audio.play();
        if (playBnt.classList.contains('pause')===false) {
            audio.pause()}
            
    });
    console.log(playList);
    console.log(song);

    prewBnt.addEventListener("click", () => {
        song -=1;
        if (song < 0) {
            song = 2
        }
        playItem[0].classList.remove('color_red');
        playItem[1].classList.remove('color_red');
        playItem[2].classList.remove('color_red');
        playItem[song].classList.toggle('color_red');
        audio.src = playList[song].src;
        if (playBnt.classList.contains('pause')===true) {
            console.log("7");
            audio.play()}
            
    });

    nextBnt.addEventListener("click", () => {
        song +=1;
        if (song === 3) {
            song = 0
        }
        audio.src = playList[(song)].src;
        playItem[0].classList.remove('color_red');
        playItem[1].classList.remove('color_red');
        playItem[2].classList.remove('color_red');
        playItem[song].classList.toggle('color_red');
        if (playBnt.classList.contains('pause')===true) {
            console.log("1");
            audio.play()}
    });
    audio.onended = function(){
        console.log('5');
        song ++;
        if (song === 3) {
            song = 0}
        this.src = playList[(song)].src;
        this.play();
    }
    
}()); 





