
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

setInterval(updatePizzaOrdersValue, 5000);
// function for getting new orders every 5 seconds --> 1hour in the game
function updatePizzaOrdersValue() {
    let newOrders = Math.round(21 * Math.pow(0.8, pizzaValue) * pizzaDemand/100);
    pizzaOrders += newOrders;
    updatePizzaOrdersText();
}
