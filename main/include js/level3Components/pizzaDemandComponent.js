
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
// overwriting the GeneratePizza-function --> because we now need to consider pizzaOrders too
GeneratePizza = function(){
    // as long as the pizza storage is not used up
    if (pizzaStorage > 0 && pizzaOrders > 0){
        // decrease pizza storage by 1
        pizzaStorage--;
        // decrement the number of pizzaOrders
        pizzaOrders--;
        pizzaStorageContainer.innerHTML = "Frozen Pizzas: " + pizzaStorage;

        // increment the number of warmed up pizzas 
        pizzasWarmedUp++;
        // update the displayed number of prepared pizzas (visible for the user)
        pizzaCounter.innerText = pizzasWarmedUp;
        // increment the current funds
        curMoney += pizzaValue;
        // update the money counter variable (visible for the user)
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
        if (pizzasWarmedUp == winCondition) {
            currentLevel++;
            GetLevel();
        }
    }
};