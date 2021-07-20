const url = "final/jason/directory.json";

fetch(url)
.then(function(response) {
    return response.json();
    })
.then(function(jObject) {

        const businesses = jObject['businesses']; 
        
         for(let i = 0; i < businesses.length; i++)   {
            
            const section = document.createElement('section');
            const h3 = document.createElement('h3');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            
            const img = document.createElement('img');

            h3.textContent = businesses[i].name;
            p1.textContent = businesses[i].contact;
            p2.textContent = businesses[i].website;
            p2.setAttribute('class', 'drctLinks');
            section.setAttribute('class', 'drctCards');
            img.setAttribute('src', businesses[i].src);
            img.setAttribute('alt', businesses[i].alt);

            section.appendChild(pic);
            
            section.appendChild(h3);
            section.appendChild(p1);
            section.appendChild(p2);
            
            document.getElementById('bCards').appendChild(section);
        }})

      