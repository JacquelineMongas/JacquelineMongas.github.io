const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
fetch (requestURL)
.then(function(reponse){
    return Response.json();
})

.then(function(jsonObject){
    //console.table(jsonObject); // checking for response
    const towns = jsonObject ['towns'];

    const towns = towns.filter(town => town.name) == 'Preston' || town.name == 'Soda Springs' && town.name == 'Fish Haven')

    
})