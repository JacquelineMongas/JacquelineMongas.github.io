const requestURL = "https://jacquelinemongas.github.io/final/js/local.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  

 .then(function (jsonObject) {
    console.table(jsonObject);
   // const local = jsonObject['local'];
 // for (let i = 0; i < local.length; i++ ) {
     // let card = document.createElement('section');
     // let h2 = document.createElement('h2');
      //let number = document.createElement('p')
     // h2.textContent = "Company: " + local[i].name;
      //number.textContent= "Phone Number: " + local[i].number;
     // card.appendChild(h2);
     // card.appendChild(number)
     // document.querySelector('div.cards').appendChild(card);
    //}
  
  });