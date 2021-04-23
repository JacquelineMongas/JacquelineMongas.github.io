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
const monthName = monthNames[todaysdate.getMonth()];
const currentDate = '${dayName}, ${todaysdate.getDate()} ${monthName}, ${todaysdate.getFullYear()}';

document.getElementById('currentDate').textContent = currentDate;
document.querySelector('#rigthsYear').textContent = '${todaysdate.getFullYear()},';
document.getElementById('modifiedTime').textContent = '${document.lastModified}';