
//toggle menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
  //weather

 //const cityid="2991754";
 const lat="48.609";
 const lon="2.8903";
  const APPID="f6820fb06665f9baab5deff8889a45f0";

  const apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&units=metrix={part}&appid=${APPID}`;
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
  const minutes = time.getMinutes();
  const ampm = hour >=12 ? 'PM' : 'AM'

  timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

  dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
  navigator.geolocation.getCurrentPosition((success) => {
      
      let {latitude, longitude } = success.coords;

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${APPID}`)
      .then(res => res.json()).then(data => {

      console.log(data)
      showWeatherData(data);
      })

  })
}

function showWeatherData (data){
  let {humidity, currentTempEl, sunset, wind_speed} = data.current;

  timezone.innerHTML = data.timezone;
  countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'
  currentWeatherItemsEl.innerHTML = `
  <div class="forecastCol">
  <p class="forecastDay"><span id="dayWeek1"></span></p>
  <img id="icon1" src="#" alt="">
  <p class="forecastTemp"><span id="forecast1"></span>${currentTempEl}&deg;F</p>
</div>
<div class="forecastCol">
<p class="forecastDay"><span id="dayWeek1"></span></p>
<img id="icon1" src="#" alt="">
<p class="forecastTemp"><span id="forecast1"></span>${humidity}&deg;F</p>
</div>
<div class="forecastCol">
<p class="forecastDay"><span id="dayWeek1"></span></p>
<img id="icon1" src="#" alt="">
<p class="forecastTemp"><span id="forecast1"></span>${weatherForecastEl}</p>
</div>
  `;

  let otherDayForcast = ''
  data.daily.forEach((day, idx) => {
      if(idx == 0){
          currentTempEl.innerHTML = `
          <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
          <div class="other">
              <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
              <div class="temp">Night - ${day.temp.night}&#176;C</div>
              <div class="temp">Day - ${day.temp.day}&#176;C</div>
          </div>
          
          `
      }else{
          otherDayForcast += `
          <div class="weather-forecast-item">
              <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
              <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
              <div class="temp">Night - ${day.temp.night}&#176;C</div>
              <div class="temp">Day - ${day.temp.day}&#176;C</div>
          </div>
          
          `
      }
  })


  weatherForecastEl.innerHTML = otherDayForcast;
}