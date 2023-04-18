
// save DOM elements for later use in variables 
const pizzaButton = document.getElementById("pizza-button");
const pizzaCounter = document.getElementById("pizza-count");
const moneyCounter = document.getElementById("money-count");
const pizzaPlusCounter = document.getElementById("pizza-plus-counter");
const dayCounter = document.getElementById("day-count");
const Clock = document.getElementById("clock");

//Level2
const level2div = document.getElementById("level2div");
let pizzaStorageContainer;
let buyPizzaButton;
let pizzaPriceContainer

// intialize essential variables 
var pizzaStorage=50;
let pizzasWarmedUp = 0;
var pizzaValue=2.50;
var pizzaPrice=1.50;

var currentLevel=1; 
var curMoney=0;
let daysPassed = 1;

var plusCounter=0;
var plusCounterDecreaseSpeed=75;
var timeoutHandle;

// Display the welcome modal on page load
$(document).ready(function() {
  $("#welcomeModal").modal("show");
  pizzaButton.style.border="none";
});

function GetLevel(){
  console.log("Current level: " + currentLevel);
  if (currentLevel>=2)
  {
    const scriptContainer = document.getElementById("script-container");
      const level2ScriptTag = document.createElement("script");
      level2ScriptTag.setAttribute("src", "./include js/level2.js");
      scriptContainer.appendChild(level2ScriptTag);
      
  }
  //If currentLevel = x, enable element on site
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded game!");
  GetLevel();
});

// function that implements the mechanism of the pizza counter
function ReducePlusCounter(){ 
      plusCounter--;
      if (plusCounter==0){
        pizzaPlusCounter.innerText="";
      } else {
        pizzaPlusCounter.innerText = "+" + plusCounter;
      }
      
      pizzasWarmedUp++;
      pizzaCounter.innerText = pizzasWarmedUp;
      curMoney += pizzaValue;
      moneyCounter.innerText = parseFloat(curMoney).toFixed(2);


      if (plusCounter>0){
        setTimeout(function(){
          ReducePlusCounter();
        }, plusCounterDecreaseSpeed)
      }
      
      
}

// function to start the reducepluscounter function with delay 
function startCounter(){
  timeoutHandle = window.setTimeout(function() {
    ReducePlusCounter();
  },1500)
}

function BuyPizza()
{
  if (curMoney >= pizzaPrice)
  {
    curMoney-=pizzaPrice;
    pizzaStorage++;
    moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
    pizzaStorageContainer.innerHTML = "Frozen Pizzas: " + pizzaStorage + "<br>";
    
  }
}

// function which determines what will happen if the pizza button is clicked
pizzaButton.addEventListener("click", function(){
    // as long as the initial pizza storage of 100 is not used up
    if (pizzaStorage > 0){
      pizzaStorage--;
      if (currentLevel>=2)
      {
        pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
      }
      pizzaButton.style.transform = "scale(0.9)";
      plusCounter++;
      pizzaPlusCounter.innerText = "+" + plusCounter;
      clearTimeout(timeoutHandle); //Reset "+1" counter timeout on click
     startCounter();
    
    setTimeout(function() {
        pizzaButton.style.transform = "scale(1.05)";
    }, 50);
    // when the initial pizza storage of 100 is used up
    } else if (currentLevel==1) {
      alert("You have no frozen pizzas left!");
      currentLevel++;
      GetLevel();
      // load the js script of level 2
      
    }
    
});

// mouseover effect for pizzabutton
pizzaButton.onmouseover = function(){
  pizzaButton.style.transform = "scale(1.05)";
};

// mouseleave effect for pizzabutton
pizzaButton.onmouseleave = function(){
  pizzaButton.style.transform = "none";
};


// Day counter interval function (1 day passes every 2 minutes)
setInterval(function() {
  daysPassed++;
  dayCounter.innerText = daysPassed;
}, 2 * 60 * 1000); // 2 minutes = 120000 milliseconds


// get the current time (we consider hours and minutes)
var hours = 0;
var minutes = 0;

// update the clock every second
setInterval(function() {
  
    minutes++;
    // if the minutes reach 60, reset to 0 and increment the hours
    if (minutes === 60) {
      minutes = 0;
      hours++;
      // if the hours reach 24, reset to 0 (at the same time the days will be incremented by 1)
      if (hours === 24) {
        hours = 0;
      }
    }
  
  // display the time in HH:MM:SS format
  let timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
  Clock.textContent = timeString;
}, 83);










