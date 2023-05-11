//Developer console comma 
//Funcions to set values for testing ("cheating")
function setMoney(amount)
{
  curMoney=amount;
  moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
  console.log("Set money to "+amount);
}

function setTotalPizzas(amount)
{
  pizzasWarmedUp=amount;
  pizzaCounter.innerText = pizzasWarmedUp;
  console.log("Set total pizzas to "+amount);
}

function setLevel(num)
{
  currentLevel=num;
  GetLevel();
}

function enableAdField()
{
    newCol3.appendChild(createAdField);
}


function setPizzaStorage(amount) 
{
  pizzaStorage=amount;
  pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
  console.log("Set frozen pizzas to " + amount);
}

function setPizzaPrice(amount) {
  pizzaValue = amount;
  pizzaValueText.innerText = "Pizza Price: €" + parseFloat(pizzaValue.toFixed(2));
  console.log("Set pizza sell price to "+ amount);
}