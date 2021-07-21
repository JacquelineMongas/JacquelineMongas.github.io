const requestURL = "json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  
  .then(function (jObject) {
    console.table(jObject); 

     
    const business = jObject['business']; 
        
    for(let i = 0; i < business.length; i++)   {
       
       const div = document.createElement('div');
       const h2 = document.createElement('h2');
       const p1 = document.createElement('p');
       const p2 = document.createElement('p');
       const pic = document.createElement('picture');
       const img = document.createElement('img');

       h2.textContent = business[i].name;
       p1.textContent = business[i].contact;
       p2.textContent = business[i].website;
       p2.setAttribute('class', 'drctLinks');
       div.setAttribute('class', 'cards');
       img.setAttribute('src', business[i].src);
       img.setAttribute('alt', business[i].alt);

       div.appendChild(pic);
       pic.appendChild(img);
       div.appendChild(h2);
       div.appendChild(p1);
       div.appendChild(p2);
       
       document.getElementById('cards').appendChild(div);
   }})
