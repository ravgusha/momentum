let dayEl = document.querySelector('.date');
let timeEl = document.querySelector('.time');
let weekdayEl = document.querySelector('.weekday');

let greeting = document.querySelector('.greeting');
let name = document.getElementById('userName');

let body = document.getElementById('body');

let slideNext = document.querySelector('.slide-next');
let slidePrev = document.querySelector('.slide-prev');


let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekdaysRus = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthsRus = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

let timeOfDay;

let language = 'en';

function getTime() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let date = time.getDate();

    let month = months[time.getMonth()];

    // let year = time.getFullYear();

    if (date < 10) {
        date = '0' + date;
    }

    if (month < 10) {
        month = '0' + month;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    timeEl.innerHTML = `${hours}:${minutes}:${seconds}`;


    if (language == 'en') {
        let weekday = weekdays[time.getDay()];
        month = months[time.getMonth()];
        dayEl.innerHTML = `${weekday},  ${month} ${date}`;
    }

    if (language == 'ru') {
        let weekday = weekdaysRus[time.getDay()];
        month = monthsRus[time.getMonth()-1];
        dayEl.innerHTML = `${weekday}, ${date}  ${month}`;
    }

}

getTime('en');
setInterval(getTime, 1000);

// LANGUAGE SETTINGS

let greetingTranslation = {
    en: ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
    ru: ['Спокойной ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'],
}


function getGreetings(lang) {
    let time = new Date();
    let hours = time.getHours();

    if (hours >= 0) {
        if (lang == 'en') {
            greeting.innerHTML = greetingTranslation.en[0];
        } else if (lang == 'ru') {
            greeting.innerHTML = greetingTranslation.ru[0];
        }
        timeOfDay = "night";
    }
    if (hours >= 6) {
        if (lang == 'en') {
            greeting.innerHTML = greetingTranslation.en[1];
        } else if (lang == 'ru') {
            greeting.innerHTML = greetingTranslation.ru[1];
        }
        timeOfDay = "morning";
    }
    if (hours >= 12) {
        if (lang == 'en') {
            greeting.innerHTML = greetingTranslation.en[2];
        } else if (lang == 'ru') {
            greeting.innerHTML = greetingTranslation.ru[2];
        }
        timeOfDay = "afternoon";
    }
    if (hours >= 18) {
        if (lang == 'en') {
            greeting.innerHTML = greetingTranslation.en[3];
        } else if (lang == 'ru') {
            greeting.innerHTML = greetingTranslation.ru[3];
        }
        timeOfDay = "evening";
    }
}

getGreetings('en');



let engLang = document.getElementById('english');
let rusLang = document.getElementById('russian');

engLang.addEventListener('click', () => {
    language = 'en';
    getGreetings('en');
    getWeather('en');
    getTime('en');
    getQuotes();
    name.placeholder = '[Enter name]';
    document.getElementById('set-lang').innerHTML = 'Language <i class="fa fa-caret-down"></i>';
    document.getElementById('set-src').innerHTML = 'Image source <i class="fa fa-caret-down"></i>';
    document.getElementById('engText').innerText = 'English';
    document.getElementById('rusText').innerText = 'Russian';
    document.getElementById('timeOff').innerText = 'Time';
    document.getElementById('dateOff').innerText = 'Date';
    document.getElementById('greetingOff').innerText = 'Greeting';
    document.getElementById('quoteOff').innerText = 'Quote';
    document.getElementById('weatherOff').innerText = 'Weather';
    document.getElementById('playerOff').innerText = 'Player';
    document.getElementById('todoOff').innerText = 'To-do';
})

rusLang.addEventListener('click', () => {
    language = 'ru';
    getGreetings('ru');
    getWeather('ru');
    getTime('ru');
    getQuotes();
    name.placeholder = '[Введите имя]';
    document.getElementById('set-lang').innerHTML = 'Язык <i class="fa fa-caret-down"></i>';
    document.getElementById('set-src').innerHTML = 'Источник фото <i class="fa fa-caret-down"></i>';
    document.getElementById('engText').innerText = 'Английский';
    document.getElementById('rusText').innerText = 'Русский';
    document.getElementById('timeOff').innerText = 'Время';
    document.getElementById('dateOff').innerText = 'Дата';
    document.getElementById('greetingOff').innerText = 'Приветствие';
    document.getElementById('quoteOff').innerText = 'Цитата';
    document.getElementById('weatherOff').innerText = 'Погода';
    document.getElementById('playerOff').innerText = 'Плеер';
    document.getElementById('todoOff').innerText = 'Задачи';
    city.value = 'Минск';
});


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

// // GETTING BACKGROUND IMAGE 

let random;
let imageSource;


function getBackground() {
    imageSource = 'gh';

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
let unTags = document.getElementById('unTags');


let flTags = document.getElementById('flTags');




async function getLinkToImageUn() {
    imageSource = 'unsplash';
    unTags.style.display = 'block';
    flTags.style.display = 'none';


    unTagsText = unTags.value;
    console.log(unTagsText)

    const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=' + timeOfDay + ',' + unTagsText + '&&client_id=vGmkWjGIedfDnRn032W3tNs7jr__vE10V-mqkyE-0mQ';
    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    const dataUrl = data.urls.regular;
    console.log('url(' + dataUrl + ')');

    const img = new Image();
    img.src = dataUrl;

    img.addEventListener('load', () => {
        body.style.backgroundImage = 'url(' + dataUrl + ')';
    })
}

async function getLinkToImageFl() {
    imageSource = 'flickr';
    flTags.style.display = 'block';
    unTags.style.display = 'none';

    flTagsText = flTags.value;
    let url;

    random = randomIntFromInterval(1, 20);

    if (timeOfDay == 'night') {
        url = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5135b594508a0a929070451a97e1c491&gallery_id=72157720062587146&extras=url_h&format=json&nojsoncallback=1';
    } else if (timeOfDay == 'evening') {
        url = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5135b594508a0a929070451a97e1c491&gallery_id=72157720111880160&extras=url_h&format=json&nojsoncallback=1';
    } else if (timeOfDay == 'afternoon') {
        url = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5135b594508a0a929070451a97e1c491&gallery_id=72157720111881805&extras=url_h&format=json&nojsoncallback=1';
    } else if (timeOfDay == 'morning') {
        url = 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5135b594508a0a929070451a97e1c491&gallery_id=72157720069530982&extras=url_h&format=json&nojsoncallback=1';
    }


    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    const dataUrl = data.photos.photo[random].url_h;
    console.log(dataUrl);

    const img = new Image();
    img.src = dataUrl;

    img.addEventListener('load', () => {
        body.style.backgroundImage = 'url(' + dataUrl + ')';
    })
}

async function getLinkToImageSearchFl() {
    imageSource = 'flickr';
    flTags.style.display = 'block';
    unTags.style.display = 'none';

    flTagsText = flTags.value;
    let url;

    random = randomIntFromInterval(1, 5);

    url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5135b594508a0a929070451a97e1c491&tags=' + timeOfDay + ',' + flTagsText + '&tag_mode=all&extras=url_l&format=json&nojsoncallback=1'


    console.log(url)
    const res = await fetch(url);
    const data = await res.json();
    const dataUrl = data.photos.photo[random].url_l;
    console.log(dataUrl);

    const img = new Image();
    img.src = dataUrl;

    img.addEventListener('load', () => {
        body.style.backgroundImage = 'url(' + dataUrl + ')';
    })
}


let gh = document.getElementById('github');
let unsplash = document.getElementById('unsplash');
let flickr = document.getElementById('flickr');

gh.addEventListener('click', getBackground);

unsplash.addEventListener('click', getLinkToImageUn);

flickr.addEventListener('click', getLinkToImageFl);

unTags.addEventListener('input', getLinkToImageUn);
flTags.addEventListener('input', getLinkToImageSearchFl);





// SLIDING IMAGES

slideNext.addEventListener('click', () => {
    random++;

    if (random < 10) {
        random = '0' + random;
    }

    if (random == '21') {
        random = '01';
    }

    if (imageSource == 'gh') {
        let url = 'https://github.com/ravgusha/stage1-tasks/blob/assets/images/' + timeOfDay + '/' + random + '.webp?raw=true';
        const img = new Image();
        img.src = url;

        img.addEventListener('load', () => {
            body.style.backgroundImage = 'url(' + url + ')';
        })
    } else if (imageSource == 'unsplash') {
        getLinkToImageUn();
    } else if (imageSource == 'flickr') {
        getLinkToImageFl();
    }

});

slidePrev.addEventListener('click', () => {
    random--;

    if (random < 10) {
        random = '0' + random;
    }
    if (random == '00') {
        random = '20';
    }

    if (imageSource == 'gh') {
        let url = 'https://github.com/ravgusha/stage1-tasks/blob/assets/images/' + timeOfDay + '/' + random + '.webp?raw=true';
        const img = new Image();
        img.src = url;

        img.addEventListener('load', () => {
            body.style.backgroundImage = 'url(' + url + ')';
        })
    } else if (imageSource == 'unsplash') {
        getLinkToImageUn();

    } else if (imageSource == 'flickr') {
        getLinkToImageFl();
    }
});

// CITY NAME SAVING

let city = document.querySelector('.city');



city.addEventListener('input', saveCity);

function saveCity() {
    localStorage.setItem('city', city.value);
    getWeather(language);
}

city.value = localStorage.getItem('city');
// console.log(city.value)

// GET WEATHER

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
let windSpeed = document.querySelector('.wind');
let humidity = document.querySelector('.humidity');


async function getWeather(lang) {
    let language = lang;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`;
    console.log(url)

    const res = await fetch(url);
    const data = await res.json();

    if (!data.main) {
        city.setAttribute('title', "City not found");
        city.style.borderColor = 'red';
    } else if (data.main){
        city.setAttribute('title', "Valid city");
        city.style.borderColor = 'white';
    }

    temp = Math.floor(data.main.temp);
    wind = Math.floor(data.wind.speed);


    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    temperature.textContent = `${temp}°C`;
    weatherDescription.textContent = data.weather[0].description;

    if (language == 'en') {
        windSpeed.textContent = `Wind speed: ${wind} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity} %`;
    } else if (language == 'ru') {
        windSpeed.textContent = `Скорость ветра: ${wind} м/с`;
        humidity.textContent = `Влажность: ${data.main.humidity} %`;
    }
}

document.addEventListener('DOMContentLoaded', getWeather('en'));

// GET QUOTES 

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let quoteBtn = document.querySelector('.change-quote');

async function getQuotes() {
    let quotes;
    // console.log(language)

    // lang = language;
    // console.log(lang)

    quotes = `../js/data/quotes-${language}.json`;

    const res = await fetch(quotes);
    const data = await res.json();

    let randomQuote = randomIntFromInterval(1, 102);

    quote.textContent = `${data.quotes[randomQuote].quote}`;
    author.textContent = `${data.quotes[randomQuote].author}`;
}

document.addEventListener('DOMContentLoaded', getQuotes);

quoteBtn.addEventListener('click', () => {
    getQuotes();
})


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
    this.currentAudio.load();
    this.toggleAudio();
    this.updateStylePlaylist(this.indexAudio, index);
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

var timer = document.getElementsByClassName('timer')[0];

var barProgress = document.getElementById("myBar");


var width = 0;

function onTimeUpdate() {
    var t = this.currentAudio.currentTime;
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.pauseToPlay(this.indexAudio)
        if (this.indexAudio < listAudio.length - 1) {
            var index = parseInt(this.indexAudio) + 1
            this.loadNewTrack(index)
        } else if (this.indexAudio = listAudio.length - 1) {
            var index = 0;
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
        this.currentAudio.muted = true;
        volUp.style.display = "none";
        volMute.style.display = "block";
    } else {
        this.currentAudio.muted = false;
        volMute.style.display = "none";
        volUp.style.display = "block";
    }
}


function setVolume() {
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

// SETTINGS 

let settingsBtn = document.getElementById("settings");
let settingPopup = document.getElementById("popup");

settingsBtn.addEventListener('click', () => {
    settingsBtn.classList.toggle('toggle');
    settingPopup.classList.toggle('active');
})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// HIDE BLOCKS

function toggContent(content_id) {
    const x = document.getElementById(content_id);
    console.log(x)
    x.classList.toggle('hide');
    console.log(x.classList)
}

// SAVE SETTINGS AFTER REFRESH

getElementById('russian').addEventListener('click', saveLang);
getElementById('english').addEventListener('click', saveLang);

function saveLang() {
    localStorage.setItem('lang', getElementById('russian').checked);
}

getElementById('russian').checked = localStorage.getItem('lang');


// TO-DO

const todo = document.getElementById('todo');
const todoCont = document.getElementById('todoCont');
const input = document.getElementById('input');
const listCont = document.getElementById('list-container');
const form = document.getElementById('form');
const li = Array.from(document.getElementsByTagName('li'));


todo.addEventListener('click', () => {
    todoCont.classList.toggle('active');
    todo.classList.toggle('active');
})

input.focus();

form.addEventListener('submit', addToDo)

function addToDo(e) {
    e.preventDefault();

    const newToDo = document.createElement("li");

    if (input.value !== '') { // добавить задачу
        newToDo.innerText = input.value;
        listCont.appendChild(newToDo);
        input.value = "";


        newToDo.addEventListener('click', doneTodo); // вычеркнуть задачу
        function doneTodo() {
            newToDo.classList.toggle('done');
        }


        newToDo.addEventListener('contextmenu', deleteTodo); // удалить задачу
        function deleteTodo(e) {
            e.preventDefault();
            listCont.removeChild(newToDo);
        }
    }
}