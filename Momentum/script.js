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

function showDate() {
    
    const month = document.querySelector('.date')
    const a = new Date();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = a.toLocaleDateString('en-En', options);
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = (days[a.getDay()])
    
    month.textContent = (day+ ", " + currentDate); 
}

function showTime() {
const time = document.querySelector('.time');
const date = new Date();
const currentTime = date.toLocaleTimeString();
setTimeout(showTime, 1000);
time.textContent = currentTime;
showDate() 
}
showTime();

function showGreeting () {
    const greeting = document.querySelector(".greeting");
    var welcome;
    const myDate = new Date();
    const hour = myDate.getHours()
    if (hour < 12) {
        welcome = "Good morning";
    } else if (hour < 17) {
        welcome = "Good afternoon";
    } else if (hour < 22 ){
        welcome = "Good evening";
    }   else {
        welcome = "Good night";
    }
    
    greeting.textContent = welcome;
}

showGreeting();

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)
  
  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
