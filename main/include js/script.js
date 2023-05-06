
// save DOM elements for later use in variables 
const pizzaButton = document.getElementById("pizza-button");
const pizzaCounter = document.getElementById("pizza-count");
const moneyCounter = document.getElementById("money-count");
const pizzaPlusCounter = document.getElementById("pizza-plus-counter");
const dayCounter = document.getElementById("day-count");
const Clock = document.getElementById("clock");
const leftAd = document.getElementById("l_AD");

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

//wincondition (=total amount of pizzas sold) to to get to the next level
var winCondition = 0;



var autoBuyerDelay=1000;
var autoBuyerPrice=50;
var autoBuyerPriceGrowth=1.08;
var maxAutoPizzas=10; //If player has this many frozen pizzas, autobuyer will not buy any more pizzas
var autoBuyerAmount=0; 
var autoBuyerActive=true;

const abField = document.getElementById("autobuyer-container");




// display the welcome modal on page load
$(document).ready(function() {
  $("#welcomeModal").modal("show");
  pizzaButton.style.border="none"; // we need this line to fix the bug with the background of the pizza button
  leftAd.style.opacity=0;
});

// print to the console on page load 
document.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded game!");
  GetLevel();
});

// this function prints the current level to the console and includes the script-file of level 2
function GetLevel(){
  console.log("Current level: " + currentLevel);
  if (currentLevel==2){
    // load the js script of level 2
    const scriptContainer = document.getElementById("script-container");
    const level2ScriptTag = document.createElement("script");
    level2ScriptTag.setAttribute("src", "./include js/level2.js");
    scriptContainer.appendChild(level2ScriptTag); 
    
  } else if (currentLevel==3) {
    // load the js script of level 3
    const scriptContainer = document.getElementById("script-container");
    const level3ScriptTag = document.createElement("script");
    level3ScriptTag.setAttribute("src", "./include js/level3.js");
    scriptContainer.appendChild(level3ScriptTag);

  }
  //If currentLevel = x, enable element on site
}

function GetAdMoney()
{
 curMoney+=0.5;
 moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
}

// function that reduces the plus counter variable, 
// increases the number of prepared pizzas and increments the money counter
function ReducePlusCounter(){ 
      // reduce the plus counter
      plusCounter--;
      if (plusCounter==0){
        pizzaPlusCounter.innerText="";
      } else {
        pizzaPlusCounter.innerText = "+" + plusCounter;
      }
      
      // increment the number of warmed up pizzas 
      pizzasWarmedUp++;
      
      // update the displayed number of prepared pizzas (visible for the user)
      pizzaCounter.innerText = pizzasWarmedUp;
      // increment the current funds
      curMoney += pizzaValue;
      // update the money counter variable (visible for the user)
      moneyCounter.innerText = parseFloat(curMoney).toFixed(2);

      // mechanism that calls back this function as long as the plus counter is larger than 0
      if (plusCounter>0){
        setTimeout(function(){
          ReducePlusCounter();
        }, plusCounterDecreaseSpeed)
      }
      
      if (pizzasWarmedUp == winCondition) {
        currentLevel++;
        GetLevel();
      }

}

// function to start the ReducePlusCounter function with delay 
function startCounter(){
  timeoutHandle = window.setTimeout(function() {
    ReducePlusCounter();
  }, 1500)
}

// anonymous function which determines what will happen if the pizza button is clicked
pizzaButton.addEventListener("click", function(){
    // as long as the initial pizza storage of 100 is not used up
    if (pizzaStorage > 0){
      // decrease pizza storage by 1
      pizzaStorage--;

      // decrease the size of the pizzabutton momentarily when its clicked 
      pizzaButton.style.transform = "scale(0.9)";
      // increment plus counter and display it
      plusCounter++;
      pizzaPlusCounter.innerText = "+" + plusCounter;
      clearTimeout(timeoutHandle); // reset "+1" counter timeout on click
      // start ReducePlusCounter with timeout 
      startCounter();
      // increase the size of the pizza button above its normal size momentarily 
      setTimeout(function() {
          pizzaButton.style.transform = "scale(1.05)";
      }, 50);

    // when the initial pizza storage of 100 is used up
    } else if (currentLevel==1) {
      // step up to level 2 and call GetLevel function
      currentLevel++;
      GetLevel();
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










