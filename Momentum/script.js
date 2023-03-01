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
    if (hour < 6){
        welcome = "Good night";}
     else if 
    (hour < 12) {
        welcome  = "Good morning";
    } else if (hour < 17) {
        welcome  = "Good afternoon";
    } else if (hour < 22 ){
        welcome  = "Good evening";
    }   else { 
        welcome  = "Good night";
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



  function getRandomNum() {
    const prevRandom = (Math.random() * 20);
   
    const random = Math.ceil(prevRandom);
   
        var lastRandom ;
        if (random < 10) {
            lastRandom = ("0" + random);
        }
        else { lastRandom = random.toString()}
    console.log(lastRandom);
    return lastRandom; 
  }
  getRandomNum();
 

  function setBg() {
    const prevRandom = (Math.random() * 20);
   
    const random = Math.ceil(prevRandom);
    
        var lastRandom ;
        if (random < 10) {
            lastRandom = ("0" + random);
        }
        else { lastRandom = random.toString()}
    console.log(lastRandom);
    const ok = new Date();
    const hours = ok.getHours()
        var dayPart;
        if (hours < 6){
            dayPart = "night";}
         else if 
        (hours < 12) {
            dayPart = "morning";
        } else if (hours < 17) {
            dayPart = "afternoon";
        } else if (hours < 22 ){
            dayPart = "evening";
        }   else { 
            dayPart = "night";
        }
      
    const abc = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"
    const abb = (abc + dayPart + "/" + lastRandom + ".jpg')");
    document.body.style.backgroundImage = abb;
    const prewBg = document.querySelector(".slide-prew");
    const nextBg = document.querySelector(".slide-next");
     
     nextBg.addEventListener("click", () => {
        const prevRandom = (Math.random() * 20);
   
        const random = Math.ceil(prevRandom);
        
            var lastRandom ;
            if (random < 10) {
                lastRandom = ("0" + random);
            }
            else { lastRandom = random.toString()}
        console.log(lastRandom);
        const ok = new Date();
        const hours = ok.getHours()
            var dayPart;
            if (hours < 6){
                dayPart = "night";}
             else if 
            (hours < 12) {
                dayPart = "morning";
            } else if (hours < 17) {
                dayPart = "afternoon";
            } else if (hours < 22 ){
                dayPart = "evening";
            }   else { 
                dayPart = "night";
            }
          
        const abc = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"
        const abb = (abc + dayPart + "/" + lastRandom + ".jpg')");
        document.body.style.backgroundImage = abb;
    });
    prewBg.addEventListener("click", () => {
        const prevRandom = (Math.random() * 20);
   
        const random = Math.ceil(prevRandom);
        
            var lastRandom ;
            if (random < 10) {
                lastRandom = ("0" + random);
            }
            else { lastRandom = random.toString()}
        console.log(lastRandom);
        const ok = new Date();
        const hours = ok.getHours()
            var dayPart;
            if (hours < 6){
                dayPart = "night";}
             else if 
            (hours < 12) {
                dayPart = "morning";
            } else if (hours < 17) {
                dayPart = "afternoon";
            } else if (hours < 22 ){
                dayPart = "evening";
            }   else { 
                dayPart = "night";
            }
          
        const abc = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/"
        const abb = (abc + dayPart + "/" + lastRandom + ".jpg')");
        document.body.style.backgroundImage = abb;
    });
    
}

setBg()

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  getQuotes();
