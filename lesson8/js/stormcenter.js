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
const hambutton = document.querySelector('.hum');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760){
        mainnav.classList.remove('responsive');

    } 
}
