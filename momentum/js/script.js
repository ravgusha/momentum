let dayEl = document.querySelector('.date');
let timeEl = document.querySelector('.time');
let weekdayEl = document.querySelector('.weekday');

let greeting = document.querySelector('.greeting');
let name = document.getElementById('userName');

let body = document.getElementById('body');

let slideNext = document.querySelector('.slide-next');
let slidePrev = document.querySelector('.slide-prev');


let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let timeOfDay;

function getTime() {
    let time = new Date();

    let date = time.getDate();
    let month = months[time.getMonth()];
    // let year = time.getFullYear();

    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }


    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (hours >= 0) {
        greeting.innerHTML = "Good night";
        timeOfDay = "night";
    }
    if (hours >= 6) {
        greeting.innerHTML = "Good morning";
        timeOfDay = "morning";
    }
    if (hours >= 12) {
        greeting.innerHTML = "Good afternoon";
        timeOfDay = "afternoon";
    }
    if (hours >= 18) {
        greeting.innerHTML = "Good evening";
        timeOfDay = "evening";
    }

    let weekday = weekdays[time.getDay()];

    dayEl.innerHTML = `${weekday}, ${month} ${date}`;
    timeEl.innerHTML = `${hours}:${minutes}:${seconds}`;
    // weekdayEl.innerHTML = `${weekday}` + `, `;
}

getTime();
setInterval(getTime, 1000);

console.log(timeOfDay)


// USER NAME SAVING

userName.addEventListener('input', saveName);

function saveName() {
    localStorage.setItem('name', userName.value);
}

userName.value = localStorage.getItem('name');

// GETTING RANDOM NUMBER 

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// GETTING BACKGROUND IMAGE 

let random;


function getBackground() {

    random = randomIntFromInterval(1, 20)
    if (random < 10) {
        random = '0' + random;
    }

    let url = 'https://github.com/ravgusha/stage1-tasks/blob/assets/images/' + timeOfDay + '/' + random + '.webp?raw=true';

    const img = new Image();
    img.src = url;

    img.addEventListener('load', () => {
        body.style.backgroundImage = 'url(' + url + ')';
    })
}

getBackground();

// SLIDING IMAGES

slideNext.addEventListener('click', () => {
    random++;

    if (random < 10) {
        random = '0' + random;
    }

    if (random == '21') {
        random = '01';
    }

    let url = 'https://github.com/ravgusha/stage1-tasks/blob/assets/images/' + timeOfDay + '/' + random + '.webp?raw=true';

    const img = new Image();
    img.src = url;

    img.addEventListener('load', () => {
        body.style.backgroundImage = 'url(' + url + ')';
    })

});

slidePrev.addEventListener('click', () => {
    random--;

    if (random < 10) {
        random = '0' + random;
    }
    if (random == '00') {
        random = '20';
    }
    let url = 'https://github.com/ravgusha/stage1-tasks/blob/assets/images/' + timeOfDay + '/' + random + '.webp?raw=true';
    const img = new Image();
    img.src = url;

    img.addEventListener('load', () => {
        body.style.backgroundImage = 'url(' + url + ')';
    })
});

// CITY SAVING

let city = document.querySelector('.city');

city.addEventListener('input', saveCity);

function saveCity() {
    localStorage.setItem('city', city.value);
    getWeather();
}

city.value = localStorage.getItem('city');


// GET WEATHER

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
let windSpeed = document.querySelector('.wind');
let humidity = document.querySelector('.humidity');


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    temp = Math.floor(data.main.temp);
    wind = Math.floor(data.wind.speed);

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Wind speed: ${wind} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
}

document.addEventListener('DOMContentLoaded', getWeather);

// GET QUOTES 

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let quoteBtn = document.querySelector('.change-quote')

async function getQuotes() {
    const quotes = '../js/data/quotes-en.json';

    const res = await fetch(quotes);
    const data = await res.json();

    let randomQuote = randomIntFromInterval(1, 102);

    quote.textContent = `${data.quotes[randomQuote].quote}`;
    author.textContent = `${data.quotes[randomQuote].author}`;
}
document.addEventListener('DOMContentLoaded', getQuotes);

quoteBtn.addEventListener('click', getQuotes);


// PLAYER 

function createTrackItem(index, name, duration) {
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-" + index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-" + index);
    document.querySelector("#ptc-" + index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-" + index);
    document.querySelector("#pbp-" + index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-" + index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
}

var listAudio = [{
        name: "Charming Smile - Egor Grushin",
        file: "../assets/sounds/track1.mp3",
        duration: "03:06"
    },
    {
        name: "Inspiration - Florian Christl",
        file: "../assets/sounds/track2.mp3",
        duration: "02:13"
    },
    {
        name: "Fly - Ludovico Einaudi",
        file: "../assets/sounds/track3.mp3",
        duration: "04:38"
    }
]

for (var i = 0; i < listAudio.length; i++) {
    createTrackItem(i, listAudio[i].name, listAudio[i].duration);
}
var indexAudio = 0;

function loadNewTrack(index) {
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio, index)
    this.indexAudio = index;
}

var playListItems = document.querySelectorAll(".playlist-track-ctn");

for (let i = 0; i < playListItems.length; i++) {
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
}

function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++) {
        if (playListItems[i] == event.target) {
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio) { // alert('Same audio');
                this.toggleAudio()
            } else {
                loadNewTrack(clickedIndex);
                console.log(clickedIndex);
            }

        }
    }
}

document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.title').innerHTML = listAudio[indexAudio].name


var currentAudio = document.getElementById("myAudio");

currentAudio.load();

currentAudio.onloadedmetadata = function () {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);

var interval1;

function toggleAudio() {

    if (this.currentAudio.paused) {
        document.querySelector('#icon-play').style.display = 'none';
        document.querySelector('#icon-pause').style.display = 'block';
        document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
        this.playToPause(this.indexAudio)
        this.currentAudio.play();
    } else {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        this.currentAudio.pause();
    }
}

function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
}

var timer = document.getElementsByClassName('timer')[0]

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        if (this.indexAudio < listAudio.length - 1) {
            var index = parseInt(this.indexAudio) + 1
            this.loadNewTrack(index)
        }
    }
}


function setBarProgress() {
    var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
    document.getElementById("myBar").style.width = progress + "%";
}


function getMinutes(t) {
    var min = parseInt(parseInt(t) / 60);
    var sec = parseInt(t % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    return min + ":" + sec
}

var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));


function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent * 100 + "%";
}

function forward() {
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
}

function rewind() {
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
}


function next() {
    if (this.indexAudio < listAudio.length - 1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);

    } else if (this.indexAudio = listAudio.length - 1) {

        var oldIndex = this.indexAudio;
        this.indexAudio = 0;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function previous() {
    if (this.indexAudio > 0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    } else if (this.indexAudio <= 0) {
        var oldIndex = this.indexAudio;
        this.indexAudio = listAudio.length - 1;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}

function updateStylePlaylist(oldIndex, newIndex) {
    document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-' + newIndex).classList.add("active-track");
    this.playToPause(newIndex)
}

function playToPause(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
}

function pauseToPlay(index) {
    var ele = document.querySelector('#p-img-' + index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
}

let btnMute = document.querySelector('#toggleMute');
let volUp = document.querySelector('#icon-vol-up');
let volMute = document.querySelector('#icon-vol-mute');
let volumeRange = document.getElementById('volumeRange');

function toggleMute() {

    if (this.currentAudio.muted == false) {
        this.currentAudio.muted = true
        volUp.style.display = "none"
        volMute.style.display = "block"
    } else {
        this.currentAudio.muted = false
        volMute.style.display = "none"
        volUp.style.display = "block"
    }
}


setVolume = function () {
    currentAudio.volume = document.getElementById("volumeRange").value;
    if (document.getElementById("volumeRange").value <= 0.02) {
        this.currentAudio.muted = true;
        volUp.style.display = "none";
        volMute.style.display = "block";
    } else if (document.getElementById("volumeRange").value > 0.02) {
        this.currentAudio.muted = false;
        volUp.style.display = "block";
        volMute.style.display = "none";
    }

};