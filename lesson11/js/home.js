const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let towns = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let img = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rainfall.textContent = "Annual Rain fall: " + towns[i].averageRainfall;
                img.setAttribute('src', "images/" + towns[i].photo);
                img.setAttribute('alt', "a nice photo of " + towns[i].name);

                towns.appendChild(h2);
                towns.appendChild(h3);
                towns.appendChild(yearFounded);
                towns.appendChild(population);
                towns.appendChild(rainfall);
                towns.appendChild(img);

                document.querySelector('#towns').appendChild(towns);
            }
        }

    });