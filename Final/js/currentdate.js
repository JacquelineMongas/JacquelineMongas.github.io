//day names arrays
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday", 
    "Friday", 
    "Saturday"
    ];

// long months names arrays
const monthNames = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var now = new Date();
var dayName = dayNames[now.getDay()];

function checkNeededZeroTime(i) {

    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
 
  var now = new Date();
  var day = dayNames[now.getDay()];
  var month = monthNames[now.getMonth()];
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
    // add a zero in front of numbers<10
  
  hours = checkNeededZeroTime(hours)
  minutes = checkNeededZeroTime(minutes);
  seconds = checkNeededZeroTime(seconds);
  
   
  
  var lastUpdateText = `${day}, ${now.getDate()} ${month}, ${now.getFullYear()} ${hours}:${minutes}:${seconds}`;
  document.getElementById('lastUpdate').textContent = lastUpdateText;
