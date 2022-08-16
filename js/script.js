const time = document.querySelector('.time');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    const dayDate = document.querySelector('.date');
    function showDate() {
      const date = new Date();
      const options = {month: 'long', day: 'numeric', weekday: 'long'};
      const currentDate = date.toLocaleDateString('en-US', options);
      dayDate.textContent = currentDate;
      }
      showDate();

    const greeting = document.querySelector('.greeting');
    const hours = date.getHours();
    function getTimeOfDay() {
      const timeOfDay = ["Night", "Morning", "Afternoon", "Evening"];
      greeting.textContent = `Good ${timeOfDay[(Math.trunc(hours/6))]}, `;
      }
      getTimeOfDay();
      
    setTimeout(showTime, 1000);
  }
showTime();

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=77d578d8a74b8fa5e755737e7f234390&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind Speed: ${Math.trunc(data.wind.speed)} m/s`
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
getWeather()

const name = document.querySelector('.name');
function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    getWeather();
    city.blur();
  }
}
window.addEventListener('load', getLocalStorage)

function setCity(event) {
if (event.code === 'Enter') {
  getWeather();
  city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


function getRandomNum() {
  return Math.floor(Math.random() * (20 - 10 + 1) ) + 10;
  }
let randomNum = getRandomNum();

function setBg() {
  const date = new Date();
  const hours = date.getHours();
  const timeOfDay = ["night", "morning", "afternoon", "evening"];
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay[(Math.trunc(hours/6))]}/${randomNum}.jpg')`;
  }
setBg()



//***************************************************/
body.addEventListener('mouseout', () => {
  getWeather();
  city.blur();
});







