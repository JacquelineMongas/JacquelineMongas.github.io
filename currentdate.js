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
const months = [
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

const todaysdate = new Date();
const dayName = dayNames[todaysdate.getDate()];
const monthName = months[todaysdate.getMonth()];
const currentdate = dayName + "," + todaysdate.getDate() + "," + monthName + "," + or + todaysdate.getFullYear();

document.getElementById('currentdate').textContent= currentdate;