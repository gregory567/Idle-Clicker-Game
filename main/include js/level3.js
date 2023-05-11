
winCondition = 500;
console.log("You reached level 3");

const pizzaButtonContainer = document.getElementById("pizza-button-container");
var pizzaDemand = 100;


//include level 3 javascript components

//include pizzaPrice Component
var pizzaPriceComponent = document.createElement('script');
pizzaPriceComponent.setAttribute("src", "./include js/level3Components/pizzaPriceComponent.js");
scriptContainer.appendChild(pizzaPriceComponent);
//include pizzaDemand Component
var pizzaDemandComponent = document.createElement('script');
pizzaDemandComponent.setAttribute("src", "./include js/level3Components/pizzaDemandComponent.js");
scriptContainer.appendChild(pizzaDemandComponent);
//include advertising Component
var advertisingComponent = document.createElement('script');
advertisingComponent.setAttribute("src", "./include js/level3Components/advertisingComponent.js");
scriptContainer.appendChild(advertisingComponent);