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


// GETTING BACKGROUND IMAGE 

let random;

function getBackground() {

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

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
}

city.value = localStorage.getItem('city');


// GET WEATHER

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=88986004c8054ae5c4021fc0e275eb5f&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    temp = Math.floor(data.main.temp);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
}
getWeather();


