
//new element tag for displaying the current public demand for pizzas
const pizzaDemandText = document.createElement("element");
updatePizzaDemandText();
pizzaButtonContainer.appendChild(pizzaDemandText);

//function for updating the public demand display
function updatePizzaDemandText() {
    pizzaDemandText.innerText = "Pizza demand: " + pizzaDemand + "%";
}

//function for increasing the public demand by a given amount (is called when the selling price is decreased)
function increasePizzaDemand(demandChange) {
    pizzaDemand += demandChange;
    updatePizzaDemandText();
}

//function for decreasing the public demand by a given amount (is called when the selling price is increased)
function decreasePizzaDemand(demandChange) {
    if (pizzaDemand > 1) {
        pizzaDemand -= demandChange;
        updatePizzaDemandText();
    }
}




