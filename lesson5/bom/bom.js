const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');

button.addEventListener('click',() => {
    if(fav.value != ''){
        // create elements in the list//
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        // change some properties... context//
        li.textContent = fav.value;
        deletebutton.textContent = '';
        deletebutton.textContent = 'delete';
// ...add the button to the li//
li.append(deletebutton);
output.append(li);


    }
 });
