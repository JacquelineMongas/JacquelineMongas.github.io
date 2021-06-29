function adjustRating(stormSeverity) {
    document.getElementById("ratingvalue").innerHTML = stormSeverity;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}

//toggle
//const hamButton = document.querySelector('.ham');
//const mainMenu = document.querySelector('#navigation');

//hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

//window.onresize = () => {
   // if(window.innerWidth > 760){
       // mainMenu.classList.remove('responsive');
  //  } 
//}
