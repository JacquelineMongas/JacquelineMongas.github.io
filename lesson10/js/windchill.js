
fetch(apiURL)
.then ((response) = response.json())
.then ((jsObject)=>{
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp;
})
