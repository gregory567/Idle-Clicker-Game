

let newDiv = document.createElement("div");

newDiv.innerHTML = "Hello!";
newDiv.setAttribute("id","level2body");


document.body.appendChild(newDiv);

pizzaStorageContainer = document.getElementById("level2body");
pizzaStorageContainer.innerHTML = "Frozen Pizzas left: " + pizzaStorage;