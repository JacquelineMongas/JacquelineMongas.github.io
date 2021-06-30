const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const prestonfilter = towns.filter(x => x.name == "Preston");
    let prestonEvents = prestonfilter[0].events;
    let ul = document.createElement('ul'); 

    prestonEvents.forEach(events => {
    let listItem = document.createElement('li');
    listItem.innerHTML = events;
    ul.append(events);
  }); 

  document.getElementById(".PrestonEvents").appendChild("events");
});