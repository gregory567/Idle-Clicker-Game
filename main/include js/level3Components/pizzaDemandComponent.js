
const pizzaDemandText = document.createElement("element");
updatePizzaDemandText();
pizzaButtonContainer.appendChild(pizzaDemandText);


function updatePizzaDemandText() {
    pizzaDemandText.innerText = "Pizza demand: " + pizzaDemand + "%";
}

function increasePizzaDemand(demandChange) {
    pizzaDemand += demandChange;
    updatePizzaDemandText();
}

function decreasePizzaDemand(demandChange) {
    if (pizzaDemand >1 ) {
        pizzaDemand -= demandChange;
        updatePizzaDemandText();
    }
}




