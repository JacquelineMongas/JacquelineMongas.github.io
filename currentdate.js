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

const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDate()];
const monthName = monthNames[todaysDate.getMonth()];
const currentDate = '${dayName}, ${todaysDate.getDate()} ${monthName}, ${todaysDate.getFullYear()}';

document.getElementById('currentDate').textContent = currentDate;
document.querySelector('#rigthsYear').textContent = '${todaysDate.getFullYear()},';
document.getElementById('modifiedTime').textContent = '${document.lastModified}';