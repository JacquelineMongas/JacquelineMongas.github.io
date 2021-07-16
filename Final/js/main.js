
//toggle menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
  //weather

  const cityid="2991754";
  const APPID="7f9a47f43cca1129189dcbdaefe179ac";

  const apiURL= `https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}`;

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let newList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    
    for (let day = 0; day <= 4; day ++) {
        let d = new Date(newList[day].dt_txt);
        document.getElementById(`dayWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = newList[day].main.temp.toFixed(0);

        const imgalt = newList[day].weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + newList[day].weather[0].icon + '@2x.png';
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
    }


  });


  //windchills//
  fetch(apiURL)

  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.list[0].main.temp;
    document.getElementById('currentTemp').textContent = jsObject.list[0].weather[0].description;
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.list[0].wind.speed;
      //Windchill Calc
      //INPUT 
      let temperature = parseFloat(jsObject.list[0].main.temp);
      let windSpeed = parseFloat(jsObject.windSpeed);
      //PROCESSING
      let windchill = "N/A";
      if (temperature <= 50 && windSpeed > 3) {
          windchill = windChill(temperature, windSpeed) + "&deg;F" ;
      }
      //OUTPUT
      document.getElementById("windChill").innerHTML = windchill;
      //windchill calculation function
      function windChill(tempF, speed) {
          windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
          return windchill.toFixed(0);
      }

});