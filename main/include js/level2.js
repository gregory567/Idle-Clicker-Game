level2div.setAttribute("class","button-container");






buyPizzaButton = document.createElement("button");

buyPizzaButton.setAttribute("onclick","BuyPizza()");
buyPizzaButton.innerHTML = "Buy Frozen Pizza";
level2div.appendChild(buyPizzaButton);



pizzaPriceContainer = document.createElement("p");
pizzaPriceContainer.innerHTML = "Current Price: €" + parseFloat(pizzaPrice).toFixed(2) + "<br>";
level2div.appendChild(pizzaPriceContainer);

pizzaStorageContainer = document.createElement("div");
level2div.appendChild(pizzaStorageContainer);

pizzaStorageContainer.insertAdjacentHTML("afterbegin","Frozen Pizzas: " + pizzaStorage);
