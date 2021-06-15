const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let image = document.createElement('image');


h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
card.appendChild(h2);
p1.textContent = 'Date of Birth ' + prophets[i].lastname;
card.appendChild(1);
p2.textContent = 'Date of Birth ' + prophets[i].lastname;
card.appendChild(2);

image.setAttribute('src', prophets[i].imageurl);
card.appendChild(image);

image.setAttribute('src', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + (i + 1));
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);

    }  
  });