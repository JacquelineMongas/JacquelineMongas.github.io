const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
  const towns = jsonObject['towns'];
  const townName = towns.filter(x => x.name.includes("Preston"));
  console.log(townName)
  
  const events = townName[0].events;

  events.forEach(event => {
      let event = document.createElement('p');

  })
});