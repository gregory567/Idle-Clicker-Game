
//new element tag for displaying the current public demand for pizzas
const pizzaDemandText = document.createElement("element");
updatePizzaDemandText();
pizzaButtonContainer.appendChild(pizzaDemandText);

//function for updating the public demand display
function updatePizzaDemandText() {
    pizzaDemandText.innerText = "Pizza demand: " + pizzaDemand + "%";
}

//function for setting new Pizza-demand
function setPizzaDemand(newDemand) {
    pizzaDemand = parseFloat(newDemand.toFixed(2)); // two decimals
    updatePizzaDemandText();
}

// new element tag for displaying the current number of orders
const pizzaOrdersText = document.createElement("element");
updatePizzaOrdersText();
pizzaButtonContainer.appendChild(pizzaOrdersText);

// function for updating the pizza-orders-text
function updatePizzaOrdersText() {
    pizzaOrdersText.innerText = "Open Orders: " + pizzaOrders;
}

// calling updatePizzaOrdersValue() every 5 seconds and displaying every 0,1 seconds the remaining orders
setInterval(function() {
    updatePizzaOrdersValue();
    setInterval(updatePizzaOrdersText, 100);
}, 5000);

// function for getting new orders every 5 seconds --> 1hour in the game
function updatePizzaOrdersValue() {
    let newOrders = Math.round(21 * Math.pow(0.8, pizzaValue) * pizzaDemand/100);
    pizzaOrders += newOrders;
}

//overwrite pizzaButtonOnClick function to take pizzaOrders into account
pizzaButtonOnClick = function () {

    // as long as the initial pizza storage of 50 is not used up
    if (pizzaStorage > 0 && pizzaOrders >0){
      // decrease pizza storage by 1
      pizzaStorage--;
      // decrease pizza orders by 1
      pizzaOrders--;
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

    // when the initial pizza storage of 50 is used up
    }
};