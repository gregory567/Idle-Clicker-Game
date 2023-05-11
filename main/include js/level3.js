
winCondition = 500;

console.log("You reached level 3");

const pizzaValueText = document.createElement("p");
updatePizzaValueText();

const increasePriceButton = document.createElement("button");
increasePriceButton.id = "increasePriceButton";
increasePriceButton.innerText = "Increase";
increasePriceButton.addEventListener("click", increasePizzaValue);

const decreasePriceButton = document.createElement("button");
decreasePriceButton.id = "decreasePriceButton";
decreasePriceButton.innerText = "Decrease";
decreasePriceButton.addEventListener("click", decreasePizzaValue);

const pizzaButtonContainer = document.getElementById("pizza-button-container");
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
}
  
function decreasePizzaValue() {
    if (pizzaValue > 1) {
        pizzaValue -= 0.01;
        updatePizzaValueText();
        if (pizzaValue <= 1) {
        decreasePriceButton.disabled = true;
        pizzaValue = 1;
        updatePizzaValueText();
        }
    }
}


/*winCondition=500;
console.log("you reached level 3");


//variable that holds the text for the pizza sell price
var pizzaValueText = document.createElement("p");

//button to increase the 
var increasePriceButton = document.createElement("button");
increasePriceButton.id = "increasePriceButton";
increasePriceButton.innerText = "Increase";

var decreasePriceButton = document.createElement("button");
decreasePriceButton.id = "decreasePriceButton";
decreasePriceButton.innerText = "Decrease";

//updates the Pizza Value
function updatePizzaValueText() {
  pizzaValueText.innerText = "Pizza Price: €" + pizzaValue.toFixed(2);
}

updatePizzaValueText();

// anonymous onclick event that increase/decrease the pizza sell price by 1 Cent
increasePriceButton.addEventListener("click", function(){
    pizzaValue+= 0.01;
    pizzaValueText.innerText = "Pizza Price: €" + parseFloat(pizzaValue.toFixed(2));
    console.log(pizzaValue);
    if (decreasePriceButton.disabled) {
        decreasePriceButton.disabled = false;        
    }
});

decreasePriceButton.addEventListener("click", function(){
    if (pizzaValue > 1) {
        pizzaValue-= 0.01;
        pizzaValueText.innerText = "Pizza Price: €" + parseFloat(pizzaValue.toFixed(2));
        console.log(pizzaValue);
        if (pizzaValue <= 1) {
            decreasePriceButton.disabled = true;
            pizzaValue = 1;
            pizzaValueText.innerText = "Pizza Price: €" + parseFloat(pizzaValue.toFixed(2));
        }
    }
});


const pizzaButtonContainer = document.getElementById("pizza-button-container");
pizzaButtonContainer.appendChild(pizzaValueText);
pizzaButtonContainer.appendChild(increasePriceButton);
pizzaButtonContainer.appendChild(decreasePriceButton);

*/