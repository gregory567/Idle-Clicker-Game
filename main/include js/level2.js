
// find the parent element with class "row" and id "second_row"
const secondRowElement = document.getElementById("second_row");

// create a new div with class "col-3"
const newCol3 = document.createElement("div");
newCol3.classList.add("col-3"); // newCol3b.setAttribute("class","col-3");

// create a new div with id "level2div"
const level2Div = document.createElement("div");
level2Div.id = "level2div"; // level2Div.setAttribute("id", "level2div");
level2Div.classList.add("button-container");

// create button to buy more pizzas
const buyPizzaButton = document.createElement("button");
buyPizzaButton.setAttribute("onclick", "BuyPizza()");
buyPizzaButton.innerHTML = "Buy Frozen Pizza";
level2Div.appendChild(buyPizzaButton);

// create p tag to display current price of pizza 
const pizzaPriceContainer = document.createElement("p");
pizzaPriceContainer.innerHTML = "Current Price: €" + parseFloat(pizzaPrice).toFixed(2) + "<br>";
level2Div.appendChild(pizzaPriceContainer);

// create a new div with id "pizzastoragecontainer"
const pizzaStorageContainer = document.createElement("div");
pizzaStorageContainer.id = "pizzastoragecontainer"; // pizzaStorageContainer.setAttribute("id", "pizzastoragecontainer");
pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
//pizzaStorageContainer.insertAdjacentHTML("afterbegin","Frozen Pizzas: " + pizzaStorage);
level2Div.appendChild(pizzaStorageContainer);

// Append the new level2div container to the second column
newCol3.appendChild(level2Div);
secondRowElement.appendChild(newCol3);


// new function to purchase more pizzas: checks available funds, decreases funds by price of pizza,
// increments number of pizzas in storage (frozen pizzas)
function BuyPizza(){
    // check if enough money available 
    if (curMoney >= pizzaPrice){
        // decrease money by current price of pizza 
        curMoney-=pizzaPrice;
        // increase number of frozen pizzas by 1
        pizzaStorage++;
        // display updated variables 
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
        pizzaStorageContainer.innerHTML = "Frozen Pizzas: " + pizzaStorage + "<br>";
    }
}


// if the pizza button is clicked, display the new (decreased) number of pizzas in storage 
pizzaButton.addEventListener("click", function(){
    pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
});
