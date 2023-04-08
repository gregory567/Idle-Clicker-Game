

const pizzaButton = document.getElementById("pizza-button");
const pizzaCounter = document.getElementById("pizza-count");
const dayCounter = document.getElementById("day-count");
const Clock = document.getElementById("clock");

let pizzasWarmedUp = 0;
let daysPassed = 0;

pizzaButton.addEventListener("click", function() {
  pizzasWarmedUp++;
  pizzaCounter.innerText = pizzasWarmedUp;
});

pizzaButton.addEventListener("click", function(){
    pizzaButton.classList.add('grow-shrink');
    setTimeout(function() {
        pizzaButton.classList.remove('grow-shrink');
    }, 50);
});

// Day counter interval function
setInterval(function() {
  daysPassed++;
  dayCounter.innerText = daysPassed;
}, 2 * 60 * 1000); // 2 minutes = 120000 milliseconds


// get the current time
var hours = 0;
var minutes = 0;
var seconds = 0;

// update the clock every second
setInterval(function() {
  // increment the seconds
  seconds++;
  // if the seconds reach 60, reset to 0 and increment the minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    // if the minutes reach 60, reset to 0 and increment the hours
    if (minutes === 60) {
      minutes = 0;
      hours++;
      // if the hours reach 24, reset to 0
      if (hours === 24) {
        hours = 0;
      }
    }
  }
  // display the time in HH:MM:SS format
  let timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  Clock.textContent = timeString;
}, 1000/720);