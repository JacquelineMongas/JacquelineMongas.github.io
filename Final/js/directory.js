const requestURL = "json/directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  
  .then(function (jObject) {
    console.table(jObject); 

     
    const business = jObject['business']; 
        
    for(let i = 0; i < business.length; i++)   {
       
       const section = document.createElement('section');
       const h2 = document.createElement('h2');
       const p1 = document.createElement('p');
       const p2 = document.createElement('p');
       const pic = document.createElement('picture');
       const img = document.createElement('img');

       h2.textContent = business[i].name;
       p1.textContent = business[i].contact;
       p2.textContent = business[i].website;
       p2.setAttribute('class', 'drctLinks');
       section.setAttribute('class', 'cards');
       img.setAttribute('src', business[i].src);
       img.setAttribute('alt', business[i].alt);

       section.appendChild(pic);
       pic.appendChild(img);
       section.appendChild(h2);
       section.appendChild(p1);
       section.appendChild(p2);
       
       document.getElementById('bCards').appendChild(section);

   }})


   
  //------------List Grid---------------//

  // Get the elements with class="x"
var elements = document.getElementsByClassName("x");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}