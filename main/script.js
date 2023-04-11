

const pizzaButton = document.getElementById("pizza-button");
const pizzaCounter = document.getElementById("pizza-count");
const moneyCounter = document.getElementById("money-count");
const pizzaPlusCounter = document.getElementById("pizza-plus-counter");
const dayCounter = document.getElementById("day-count");

const Clock = document.getElementById("clock");

var currentLevel=1; 

var pizzaStorage=100;

var pizzaPrice=2.50;
var curMoney=0;

let pizzasWarmedUp = 0;
let daysPassed = 1;


var plusCounter=0;
var plusCounterDecreaseSpeed=75;
var timeoutHandle;

function GetLevel()
{
  console.log("Current level: "+currentLevel);
  //If currentLevel = x, enable element on site
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded game!");
  GetLevel();
});


function ReducePlusCounter()
{ 
      plusCounter--;
      if (plusCounter==0)
      {
        pizzaPlusCounter.innerText="";
      }
      else 
      {
        pizzaPlusCounter.innerText="+"+plusCounter;
      }
      
      pizzasWarmedUp++;
      pizzaCounter.innerText = pizzasWarmedUp;
      curMoney+=pizzaPrice;
      moneyCounter.innerText=parseFloat(curMoney).toFixed(2);


      if (plusCounter>0)
      {
        setTimeout(function(){
          ReducePlusCounter();
        },plusCounterDecreaseSpeed)
      }
      
      
}

function startCounter()
{
  timeoutHandle = window.setTimeout(function() {
    ReducePlusCounter();
  },1500)
}

/*
pizzaButton.addEventListener("click", function() {
      pizzasWarmedUp++;
      pizzaCounter.innerText = pizzasWarmedUp;
});
*/

pizzaButton.addEventListener("click", function(){
    //pizzaButton.classList.add('grow-shrink');
    if (pizzaStorage > 0)
    {
      pizzaStorage--;
      pizzaButton.style.transform = "scale(0.9)";
      plusCounter++;
      pizzaPlusCounter.innerText="+"+plusCounter;
      clearTimeout(timeoutHandle); //Reset "+1" counter timeout on click
     startCounter();
    
    setTimeout(function() {
        //pizzaButton.classList.remove('grow-shrink');
        pizzaButton.style.transform = "scale(1.05)";
    }, 50);
    }
    else if (currentLevel==1) {
      alert("You have no frozen pizzas left!");
      currentLevel=2;
      GetLevel();
    }
    
});

pizzaButton.onmouseover = function(){
  pizzaButton.style.transform = "scale(1.05)";
};
pizzaButton.onmouseleave = function(){
  pizzaButton.style.transform = "none";
};


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
  
  // display the time in HH:MM:SS format
  let timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  Clock.textContent = timeString;
},83);