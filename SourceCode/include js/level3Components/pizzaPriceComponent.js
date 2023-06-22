
//new element tag for displaying the current price at which we sell one pizza
const pizzaValueText = document.createElement("element");
updatePizzaValueText();

//new button for increasing the selling price of one pizza 
const increasePriceButton = document.createElement("button");
increasePriceButton.id = "increasePriceButton";
increasePriceButton.innerText = "Increase Selling Price";
increasePriceButton.addEventListener("click", increasePizzaValue);

//new button for decreasing the selling price of one pizza 
const decreasePriceButton = document.createElement("button");
decreasePriceButton.id = "decreasePriceButton";
decreasePriceButton.innerText = "Decrease Selling Price";
decreasePriceButton.addEventListener("click", decreasePizzaValue);

//we append the price display element and the two buttons to the pizza button container 
pizzaButtonContainer.appendChild(pizzaValueText);
pizzaButtonContainer.appendChild(increasePriceButton);
pizzaButtonContainer.appendChild(decreasePriceButton);

//function for updating the pizza price display 
function updatePizzaValueText() {
    pizzaValueText.innerText = "Pizza Price: €" + pizzaValue.toFixed(2);
}
  
//onclick function for increasing the selling price of one pizza 
function increasePizzaValue() {
    pizzaValue += 0.1;
    updatePizzaValueText();
    //we need to enable the decrease button (for the case when the price is increased from 1 to 1.01)
    decreasePriceButton.disabled = false;
    //a price increase has a negative effect on the public demand
    setPizzaDemand(pizzaDemand * 0.99);
}

//onclick function that decreases the pizza selling price by 1 cent as long as the price is >1 and disables the decrease button if the selling price is 1
function decreasePizzaValue() {
    //if pizza selling price is greater 1 decrease by 10 cent
    if (pizzaValue > 1.5) {
        pizzaValue -= 0.1;
        updatePizzaValueText();
        //a price decrease has a positive effect on the public demand
        setPizzaDemand(pizzaDemand * 1.01);
        //if pizza value is now 1, disable the decrease button
        if (pizzaValue <= 1.5) {
            decreasePriceButton.disabled = true;
            //due to floating value the pizza price could drop below 1 (0.9999999), so we set to 1
            pizzaValue = 1.5;
            updatePizzaValueText();
        }
    }
}