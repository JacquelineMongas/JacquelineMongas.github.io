var start;

window.onload = function() {

  start = new Date();
console.log("start:"+ start);
};

 

window.onunload = function() {

  var end = new Date();
  console.log("end:"+ end);

  var timeSpent = Math.abs(end - start);
  console.log("timeSpent:"+ timeSpent);


  var msPerHours= 1000;

  var timeSpentInHours = Math.floor(timeSpent/msPerHours);
  console.log("timeSpentInHours:"+ timeSpentInHours);

  if (typeof Storage !== "undefined") {
    localStorage.visitcount = Number(localStorage.visitcount) + 1;


    localStorage.duration = Number(localStorage.duration) + timeSpentInHours;

  }

};

 

var counterText;

if (typeof Storage !== "undefined") {

    if (localStorage.visitcount && !isNaN(localStorage.visitcount)) {

        counterText = "Welcome back, you've been here " + localStorage.visitcount + " times before (" + localStorage.duration + " hours of visit on this page until now)";

        
    } else {

       localStorage.visitcount = 1;
       localStorage.duration = 0;

        counterText = "This is your first time here! Welcome.";

  }

} else {

    counterText="Sorry, your browser does not support web storage...";

}

var counterElement = document.getElementById("welcome");

if(counterElement) {

    counterElement.textContent = counterText;

}

 