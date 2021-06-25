const cityid = "5604473";
const APPID = "cf458bbc49198210ac08ee36c73ee078";

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&units=imperial&appid=${APPID}`;

//Weather Forecast//
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    let day = 0;
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const fiveDayForecast  = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    //console.log(fiveDayforecast);

    for (let day = 0; day <= 4; day++){
        let d = new Date (fiveDayForecast[day].dt_text);
        document.getElementById(`daysOfWeek${day+1}`).textContent = daysOfWeek[d.getDate()];
        document.getElementById(`forecast${forecast+1}`).textContent = fiveDayForecast[forecast()];
    }




    
  });
