
//toggle menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
  //weather

 //const cityid="2991754";
 const lat="48.609";
 const lon="2.8903";
  const APPID="f6820fb06665f9baab5deff8889a45f0";

  const apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&units=metrix={part}&appid=${APPID}`;
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


