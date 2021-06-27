fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('.weatherSummary.temperature').textContent = jsObject.main.temp;
    document.getElementById('.weatherSummary.currentTemp').textContent = jsObject.weather[0].description;
    document.getElementById('.weatherSummary.humidity').textContent = jsObject.main.humidity;
    document.getElementById('.weatherSummary.windSpeed').textContent = jsObject.wind.speed;
      //Windchill Calc
      //INPUT 
      let temperature = parseFloat(jsObject.main.temp);
      let windSpeed = parseFloat(jsObject.windSpeed);
      //PROCESSING
      let windchill = "N/A";
      if (temperature <= 50 && windSpeed > 3) {
          windchill = windChill(temperature, windSpeed) + "&deg;F";
      }
      //OUTPUT
      document.getElementById("windChill").innerHTML = windchill;
      //windchill calculation function
      function windChill(tempF, speed) {
          windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
          return windchill.toFixed(0);
      }

});

