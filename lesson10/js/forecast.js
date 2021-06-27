const cityid = "5604473";
const APPID = "cf458bbc49198210ac08ee36c73ee078";

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&units=imperial&appid=${APPID}`;

//Weather Forecast//
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


  

  