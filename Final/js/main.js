
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

  const apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=48.609&lon=2.8903&exclude=minutly&units=imperial={part}&appid=${APPID}`;
 
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    console.log(jsObject.current.weather[0].description);
    document.getElementById('conditions').textContent = jsObject.current.weather[0].description;
    document.getElementById('currently').textContent = jsObject.current.temp;
    
    document.getElementById('humidity').textContent = jsObject.current.humidity;
  
  });  


  // forecast
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const forecastURL=`https://api.openweathermap.org/data/2.5/forecast?id=2991754&units=imperial&appid=${APPID}`;
  fetch(forecastURL)
      .then((response) => response.json())
      .then((jsObject) => {
        let days = 1;
        const daysofweek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    
        const threeDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
        
    
        threeDayForecast.forEach(x => {
          let forecastdate = new Date(x.dt_txt);
          
          
          document.getElementById('forecast' + days).textContent = daysofweek[forecastdate.getDay()];
        
          document.getElementById('forecastTemp'+ days).textContent = x.main.temp.toFixed(0);
          document.getElementById('forecast' + days + 'image').setAttribute('src', `https://openweathermap.org/img/w/${x.weather[0].icon}.png`);
          days++;
    
      })
    
      });

