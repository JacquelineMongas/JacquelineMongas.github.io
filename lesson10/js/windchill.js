fetch(apiURL)
 
.then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const tempF = document.querySelector("#currentTemp").textContent;
    const speed = document.querySelector("#windSpeed").textContent;
    
    if (tempF <= 50 && speed >= 3.0) {
      let f =
        35.74 +
        0.6215 * tempF -
        35.75 * speed ** 0.16 +
        0.4275 * tempF * speed ** 0.16;
      document.querySelector("#windChill").textContent = f.toFixed(0)+"&deg;F";
    } else {
      document.querySelector("#windChill").textContent = "N/A";
    }
  });
