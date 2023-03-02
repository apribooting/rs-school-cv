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
        const prevRandom = (Math.random() * 20 );
   
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
        const preImg = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'
        const abb = (abc + dayPart + "/" + lastRandom + ".jpg')");
        const img = new Image();
        img.src = (preImg + dayPart + "/" + lastRandom + ".jpg");
        img.onload = () => {
        document.body.style.backgroundImage = abb};
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
        const preImg = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/'
        const abb = (abc + dayPart + "/" + lastRandom + ".jpg')");
        const img = new Image();
        img.src = (preImg + dayPart + "/" + lastRandom + ".jpg");
        img.onload = () => {
        document.body.style.backgroundImage = abb};
    });
    
}

setBg()

function setLocalStorage() {
    const name = document.querySelector(".name");
    localStorage.setItem('name', name.value);
    }
    window.addEventListener('beforeunload', setLocalStorage);
    
    function getLocalStorage() {
    const name =document.querySelector(".name")
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    }
    window.addEventListener('load', getLocalStorage);
let lang = "en";
    const city =document.querySelector(".city");
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    async function getWeather(a) {
        const urlTranlation ={
            'en':[[`https://api.openweathermap.org/data/2.5/weather?q=${a}&lang=en&appid=b332b3c13a9eb7954f5fa649326d9241&units=metric`],['Wind speed'],['Humidity']],
            'ru':[[`https://api.openweathermap.org/data/2.5/weather?q=${a}&lang=ru&appid=b332b3c13a9eb7954f5fa649326d9241&units=metric`],['Скорость ветра'],['Влажность']]
        }
        const url = urlTranlation[lang][0][0];
        const res = await fetch(url);
        const data = await res.json();
        const weatherError = document.querySelector('.weather-error');
        if (data.cod==='404'){
            weatherIcon.className = 'weather-icon owf';
            weatherError.textContent='city not found';
            temperature.textContent ='';
            weatherDescription.textContent = '';
            wind.textContent = '';
            humidity.textContent = '';
        }else {
            weatherError.textContent='';
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${Math.floor(data.main.temp)}°C`;
            weatherDescription.textContent = data.weather[0].description;
            wind.textContent = `${urlTranlation[lang][1][0]}: ${Math.floor(data.wind.speed)} m/s`;
            humidity.textContent = `${urlTranlation[lang][2][0]}: ${data.main.humidity} %`;
        }
    }
    const cityTranslation = {
        'en':'Minsk',
        'ru':'Минск'
    }
    city.value =  cityTranslation[lang]
    getWeather(city.value);
    localStorage.setItem('city', city.value);
    
    function cityValue(){
        city.value = cityTranslation[lang];
    }
cityValue()
    function setLocalStorageCity() {
        localStorage.setItem('city', city.value);
        getWeather(city.value);
    }
    city.addEventListener('change', setLocalStorageCity);
    
    function getLocalStorageCity() {
        if(localStorage.getItem('city')) {
            city.value = localStorage.getItem('city');
        }
        getWeather(city.value);
    }
    window.addEventListener('load', getLocalStorageCity);
function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }   

const quote = document.querySelector('.quote');
const author =document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote')
async function getQuotes() {
    const quotesTranslation= {
        'en':'./assets/json/frazy.json',
        'ru':'./assets/json/frazy.json'
    }
    const quotes = quotesTranslation[lang];
    const res = await fetch(quotes);
    const data = await res.json();
    const numberQuote = getRandom(0,(data.length-1));
    quote.textContent = `\"${data[numberQuote].text}\"`;
    author.textContent = data[numberQuote].author;
}
getQuotes();
changeQuote.addEventListener('click',()=>{
    getQuotes();
})

const languageTodolist = {
    'en':['New taks','Add','Resting','Todo list'],
    'ru':['Новое задание','Добавить','Список дел пуст','Список дел']
}
const titleTodolist = document.querySelector('.todolist-title');
const todolistInput = document.querySelector('.todolist-form-input');
const todolistButton = document.querySelector('.todolist-form-button');
const listNoneText = document.querySelector('.list-none-text');
const todolistForm = document.querySelector('.todolist-form');
const listAvailable = document.querySelector('.list-available');
function translationTodolist (){
    todolistInput.placeholder = languageTodolist[lang][0];
    todolistButton.textContent = languageTodolist[lang][1];
    listNoneText.textContent = languageTodolist[lang][2];
    titleTodolist.textContent =languageTodolist[lang][3];
}
translationTodolist();
let numberListElement = 1;
function addTodolist(event){
    event.preventDefault();
    document.querySelector('.list-none').classList.add('none');
    listAvailable.classList.add('list-available-open');
    let divTodolist = document.createElement('div');
    divTodolist.classList.add('todo-list-element');
    let inputTodolist = document.createElement("input");
    inputTodolist.classList.add('input-todolist');
    let label1 = document.createElement('label');
    inputTodolist.id = `${numberListElement}`;
    inputTodolist.type = "checkbox";  
    label1.setAttribute("for", `${numberListElement}`);
    label1.classList.add('todo-list-element-label')
    label1.innerHTML = todolistInput.value;
    let spanClose = document.createElement("span");
    spanClose.classList.add('todo-list-element-span');
    spanClose.textContent ="X";    
    divTodolist.appendChild(inputTodolist);
    divTodolist.appendChild(label1);
    divTodolist.appendChild(spanClose);
    listAvailable.appendChild(divTodolist);
    todolistInput.value = "";
    numberListElement += 1;
    inputTodolist = document.querySelectorAll('.input-todolist');
    inputTodolist.forEach(el=>{
        el.addEventListener('click', clickTodo);
    });
    divTodolist = document.querySelectorAll('.todo-list-element')
    divTodolist.forEach(item=>{
        item.addEventListener('mouseover',hoverTodo);
        item.addEventListener('mouseout',hoverTodo);
    });
    
}
function addTodolistLocalStorage(el){
    document.querySelector('.list-none').classList.add('none');
    listAvailable.classList.add('list-available-open');
    let divTodolist = document.createElement('div');
    divTodolist.classList.add('todo-list-element');
    let inputTodolist = document.createElement("input");
    inputTodolist.classList.add('input-todolist');
    let label1 = document.createElement('label');
    inputTodolist.id = `${numberListElement}`;
    inputTodolist.type = "checkbox";  
    label1.setAttribute("for", `${numberListElement}`);
    label1.classList.add('todo-list-element-label')
    label1.innerHTML = el;
    let spanClose = document.createElement("span");
    spanClose.classList.add('todo-list-element-span');
    spanClose.textContent ="X";    
    divTodolist.appendChild(inputTodolist);
    divTodolist.appendChild(label1);
    divTodolist.appendChild(spanClose);
    listAvailable.appendChild(divTodolist);
    numberListElement += 1;
    inputTodolist = document.querySelectorAll('.input-todolist');
    inputTodolist.forEach(el=>{
        el.addEventListener('click', clickTodo);
    });
    divTodolist = document.querySelectorAll('.todo-list-element')
    divTodolist.forEach(item=>{
        item.addEventListener('mouseover',hoverTodo);
        item.addEventListener('mouseout',hoverTodo);
    });
    
}
todolistForm.addEventListener('submit', addTodolist);
function removetodo(event){
    event.currentTarget.parentNode.remove();
    let divTodolist = document.querySelectorAll('.todo-list-element');
    console.log(divTodolist)
    if(divTodolist.length===0){
        document.querySelector('.list-none').classList.remove('none');
        listAvailable.classList.remove('list-available-open');
    }

}
function clickTodo(event){
    event.currentTarget.nextElementSibling.classList.toggle('input-todolist-inactive');
}
function clickTodoLocalStorage(el){
    let labelTodo = document.querySelectorAll('.todo-list-element-label');
    labelTodo.forEach(item=>{
        if(item.textContent===el){
            item.classList.toggle('input-todolist-inactive');
            item.previousSibling.checked=true;
        }
    })
    
}
function hoverTodo(event){
    event.currentTarget.lastChild.classList.toggle('todo-list-element-span-hover');
    event.currentTarget.lastChild.addEventListener('click',removetodo)
}


function returnallTodoList (Nameclass){
    let allTodolist ='';
    document.querySelectorAll(`.${Nameclass}`).forEach(el=>{
        allTodolist += `${el.textContent} `;
    });
    return allTodolist;
}
function setLocalStorageSetting() {    
    localStorage.setItem('language', lang);
    localStorage.setItem('photoAPI', photoApi);  
    localStorage.setItem('timeOfDayUnslash', tagUnsplash.value);
    localStorage.setItem('timeOfDayflickr', tagflickr.value);
   
    let allTodolist = returnallTodoList('todo-list-element-label');
    localStorage.setItem('allTodolist', allTodolist);
    let allTodolistinactive = returnallTodoList('input-todolist-inactive');
    localStorage.setItem('allTodolistinactive', allTodolistinactive);
}
window.addEventListener('beforeunload', setLocalStorageSetting);
const checkbox = document.querySelectorAll('.visibility-checkbox');

function getLocalStorageSetting() {
    if(localStorage.getItem('language')) {
        lang = localStorage.getItem('language');        
    }    
    getLocalStorageCity();
    cityValue();
    getQuotes();    

    translationTodolist();
   
    
    if (localStorage.getItem('photoAPI')==='flickr'){
        timeOfDayflickr = tagflickr.value;
        clickFlickrButton();
        clickburger();
    }else if(localStorage.getItem('photoAPI')==='unsplash'){
        timeOfDayUnslash = tagUnsplash.value;
        clickUnsplashButton();
        clickburger();
    }
    checkbox.forEach((el,ind)=>{        
        if(localStorage.getItem(`${el.id}`)==='false'){
            el.checked = false;
            changeCheckbox(el);
        }else{
            el.checked = true;
        }
    })
    let allTodolist = localStorage.getItem('allTodolist');
    allTodolist = allTodolist.slice(0,(allTodolist.length-1));
    allTodolist.forEach(el=>{
    addTodolistLocalStorage(el);
    })
    let allTodolistinactive= localStorage.getItem('allTodolistinactive').split(' ');
    allTodolistinactive = allTodolistinactive.slice(0,(allTodolistinactive.length-1));
    allTodolistinactive.forEach(el=>{
        clickTodoLocalStorage(el);
    })   
    

    
}
window.addEventListener('load', getLocalStorageSetting);
