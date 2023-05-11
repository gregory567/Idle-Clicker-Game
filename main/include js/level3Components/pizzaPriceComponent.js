
const pizzaValueText = document.createElement("element");
updatePizzaValueText();

const increasePriceButton = document.createElement("button");
increasePriceButton.id = "increasePriceButton";
increasePriceButton.innerText = "Increase";
increasePriceButton.addEventListener("click", increasePizzaValue);

const decreasePriceButton = document.createElement("button");
decreasePriceButton.id = "decreasePriceButton";
decreasePriceButton.innerText = "Decrease";
decreasePriceButton.addEventListener("click", decreasePizzaValue);

pizzaButtonContainer.appendChild(pizzaValueText);
pizzaButtonContainer.appendChild(increasePriceButton);
pizzaButtonContainer.appendChild(decreasePriceButton);

function updatePizzaValueText() {
    pizzaValueText.innerText = "Pizza Price: €" + pizzaValue.toFixed(2);
}
  
function increasePizzaValue() {
    pizzaValue += 0.01;
    updatePizzaValueText();
    decreasePriceButton.disabled = false;
    decreasePizzaDemand(1);
}

//onclick function that decreases the pizza sell price by 1 cent as long as the price is >=1 and disables the decresae button if price is 1
function decreasePizzaValue() {
    //if pizza sellprice is greater 1 decrease by 1 cent
    if (pizzaValue > 1) {
        pizzaValue -= 0.01;
        updatePizzaValueText();
        increasePizzaDemand(1);
        //if pizza value is now 1 disable the decresae button
        if (pizzaValue <= 1) {
            decreasePriceButton.disabled = true;
            //due to floating value the pizza price could drop below 1, so we set to 1
            pizzaValue = 1;
            updatePizzaValueText();
        }
    }
}