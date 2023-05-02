
// create DOM elements and append them to the html document
// find the parent element with class "row" and id "second_row"
const secondRowElement = document.getElementById("second_row");



// create a new div with class "col-3"
const newCol3 = document.createElement("div");
newCol3.classList.add("col-3"); // newCol3.setAttribute("class","col-3");

// create a new div with id "level2div"
const level2Div = document.createElement("div");
level2Div.id = "level2div"; // level2Div.setAttribute("id", "level2div");
level2Div.classList.add("button-container");

// create a new button to buy 1 pizza
const buyPizzaButton = document.createElement("button");
buyPizzaButton.setAttribute("onclick", "BuyPizza()");
buyPizzaButton.classList.add("buy-button");
buyPizzaButton.classList.add("button");
buyPizzaButton.innerHTML = "Buy Frozen Pizza";
level2Div.appendChild(buyPizzaButton);



// create a new button to buy 10 pizzas
const buyTenPizzasButton = document.createElement("button");
buyTenPizzasButton.setAttribute("onclick", "BuyTenPizzas()");
buyTenPizzasButton.classList.add("buy-button");
buyTenPizzasButton.classList.add("button");
buyTenPizzasButton.innerHTML = "Buy 10 Frozen Pizzas";

level2Div.appendChild(buyTenPizzasButton);

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

// append the new level2div container to the new column and the new column to the second row
newCol3.appendChild(level2Div);
secondRowElement.appendChild(newCol3);


var l2active=false;

const createAdField = document.createElement("div");
createAdField.classList.add("button-container");
const createAdButton = document.createElement("button");
createAdButton.innerText="Enable Site Ads";
createAdButton.classList.add("button");
createAdButton.setAttribute("onclick", "CreateAd()");
createAdField.appendChild(createAdButton);
// new function to purchase more pizzas: checks available funds, decreases funds by price of pizza,
// increments number of pizzas in storage (frozen pizzas)
function BuyPizza(){
    // check if enough money available 
    if (curMoney >= pizzaPrice){
        // decrease money by current price of pizza 
        curMoney-=pizzaPrice;
        // increase number of frozen pizzas by 1
        pizzaStorage++;
        // display updated variables to user
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
        pizzaStorageContainer.innerHTML = "Frozen Pizzas: " + pizzaStorage + "<br>";
    }
    else if (pizzaStorage==0)
    {
        newCol3.appendChild(createAdField);
    }
}
function enableAdField() //For developer console
{
    newCol3.appendChild(createAdField);
}

function CreateAd() //Enables advertisement and removes the ability to enable it
{
    leftAd.style.opacity=1;
    setInterval(GetAdMoney,2000);
    newCol3.removeChild(createAdField);
}

// new function to purchase 10 pizzas: checks available funds, decreases funds by 10 times the price of pizza,
// increments number of pizzas in storage (frozen pizzas) by 10
function BuyTenPizzas(){
    // calculate the price of 10 pizzas
    const tenPizzasPrice = pizzaPrice * 10;
    
    // check if enough money available 
    if (curMoney >= tenPizzasPrice){
        // decrease money by 10 times the current price of pizza 
        curMoney -= tenPizzasPrice;
        // increase number of frozen pizzas by 10
        pizzaStorage += 10;
        // display updated variables to user
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
        pizzaStorageContainer.innerHTML = "Frozen Pizzas: " + pizzaStorage + "<br>";
    }
}


// create a new div with class "col-3"
const newCol3b = document.createElement("div");
newCol3b.classList.add("col-3"); // newCol3b.setAttribute("class","col-3");

// create a new div with id "level2divb"
const level2Divb = document.createElement("div");
level2Divb.id = "level2divb"; // level2Divb.setAttribute("id", "level2divb");
level2Divb.classList.add("button-container");

// create a new button to buy a pizza-generating machine
const PizzaAutomat = document.createElement("button");
PizzaAutomat.classList.add("button");
PizzaAutomat.setAttribute("onclick", "createAutomat()");
PizzaAutomat.classList.add("pizza-automat");
PizzaAutomat.innerHTML = "Buy Pizza Machine";
level2Divb.appendChild(PizzaAutomat);

// create p tag to display current price of pizza 
var pizzaMultiplier = 0;
const currentPizzaMultiplier = document.createElement("p");
currentPizzaMultiplier.innerHTML = "";
level2Divb.appendChild(currentPizzaMultiplier);

// create p tag to display current price of pizza automat
var automatPrice = 75;
const currentAutomatPrice = document.createElement("p");
currentAutomatPrice.innerHTML = "Current Price of Pizza Automat: €" + automatPrice + "<br>";
level2Divb.appendChild(currentAutomatPrice);






// if the pizza button is clicked, display the new (decreased) number of pizzas in storage 

pizzaButton.addEventListener("click", function(){
    pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
    if (l2active==false)
    {
        addToLevelFunction();
    }
    
    
});

function addToLevelFunction (){
        newCol3b.appendChild(level2Divb);
        secondRowElement.appendChild(newCol3b);
        createABWindow();
        l2active=true;
}


function createAutomat(){
    // check if enough money available 
    if(curMoney >= automatPrice){
        // decrease money by current price of pizza automat 
        curMoney-=automatPrice;
        // increase pizza multiplier
        pizzaMultiplier++;
        // increase price of automat
        automatPrice=automatPrice*(Math.pow(1.08,pizzaMultiplier));
        automatPrice=Math.round(automatPrice*100)/100; //Round to two decimals
        // display updated variables to user
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
        currentPizzaMultiplier.innerHTML = "Current Pizza Multiplier: x" + pizzaMultiplier + "<br>";
        currentAutomatPrice.innerHTML = "Current Price of Pizza Automat: " + automatPrice + "<br>";

        // call the GeneratePizza function every second
        setInterval(GeneratePizza, 1000);
    }
}


// generates 1 pizza automatically every second
function GeneratePizza(){
    // as long as the pizza storage is not used up
    if (pizzaStorage > 0){
        // decrease pizza storage by 1
        pizzaStorage--;
        pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
  
        // increment the number of warmed up pizzas 
      pizzasWarmedUp++;
      // update the displayed number of prepared pizzas (visible for the user)
      pizzaCounter.innerText = pizzasWarmedUp;
      // increment the current funds
      curMoney += pizzaValue;
      // update the money counter variable (visible for the user)
      moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
    }
}

function setPizzaStorage(amount) //For developer console
{
  pizzaStorage=amount;
  pizzaStorageContainer.innerHTML="Frozen Pizzas: " + pizzaStorage;
  console.log("Set frozen pizzas to " + amount);
}

function toggleAutoBuyers()
{
    const onoff = document.getElementById("ab-onoff");
    if (onoff!=null)
    {
        if (autoBuyerActive==true)
    {
        onoff.innerHTML="OFF";
        onoff.classList.remove("ab-on");
        onoff.classList.add("ab-off");
        autoBuyerActive=false;
        console.log("Turned autobuyers OFF");
    }
    else 
    {
        onoff.innerHTML="ON";
        onoff.classList.remove("ab-off");
        onoff.classList.add("ab-on");
        autoBuyerActive=true;
        console.log("Turned autobuyers ON");
    }
    }
    
}



function updateAutoBuyerWindow()
{
    document.getElementById("cur-price").innerHTML="<br>Current price: "+autoBuyerPrice;
    document.getElementById("cur-amount").innerHTML="<br>Active AutoBuyers: "+autoBuyerAmount;
    let slider = document.getElementById("ab-range");
    
    document.getElementById("max-pizza-count").innerHTML=maxAutoPizzas;
}



function createAutoBuyer()
{
  if (curMoney >= autoBuyerPrice)
  {
    curMoney-=autoBuyerPrice;
    moneyCounter.innerText = parseFloat(curMoney).toFixed(2);

    autoBuyerAmount++;
    autoBuyerPrice=autoBuyerPrice*Math.pow(autoBuyerPriceGrowth,autoBuyerAmount);
    autoBuyerPrice=Math.round(autoBuyerPrice*100)/100;
    updateAutoBuyerWindow();
  }
}

function createABWindow()
{
    
    let firstDiv=document.createElement("div");
    firstDiv.classList.add("centerdiv");
    let buyABButton = document.createElement("button");
    buyABButton.innerHTML = "Buy AutoBuyer";
    buyABButton.setAttribute("onclick","createAutoBuyer()");
    buyABButton.classList.add("button");
    let curPrice = document.createElement("element");
    curPrice.id = "cur-price";
    curPrice.innerHTML = "<br>Current price: "+autoBuyerPrice;
    let curAmt = document.createElement("element");
    curAmt.id = "cur-amount";
    curAmt.innerHTML = "<br>Active AutoBuyers: "+autoBuyerAmount;
    firstDiv.appendChild(buyABButton);
    firstDiv.appendChild(curPrice);
    firstDiv.appendChild(curAmt);

    let secondDiv=document.createElement("div");
    secondDiv.classList.add("centerdiv");
    let toggleABButton = document.createElement("button");
    toggleABButton.classList.add("button");
    toggleABButton.setAttribute("onclick","toggleAutoBuyers()");
    toggleABButton.innerHTML = "Toggle AutoBuyers";
    
    secondDiv.appendChild(toggleABButton);
    secondDiv.innerHTML+="<br>Status: ";
    let curStatus = document.createElement("element");
    curStatus.id = "ab-onoff";
    curStatus.innerHTML="ON";
    curStatus.classList.add("ab-on");
    secondDiv.appendChild(curStatus);

    let thirdDiv = document.createElement("div");
    thirdDiv.classList.add("centerdiv");
    thirdDiv.innerHTML="<br>Max frozen pizzas: <br>";
    let abSlider = document.createElement("input");
    abSlider.setAttribute("type","range");
    abSlider.setAttribute("min","0");
    abSlider.setAttribute("max","50");
    abSlider.setAttribute("value","10");
    abSlider.classList.add("slider");
    abSlider.id="ab-range";
    abSlider.setAttribute("oninput","updateAutoBuyerWindow()");
    thirdDiv.appendChild(abSlider);
    let curMax = document.createElement("element");
    curMax.id="max-pizza-count";
    curMax.innerHTML=maxAutoPizzas;
    thirdDiv.appendChild(curMax);

    abSlider.oninput = function() 
    {
    maxAutoPizzas=Math.round(this.value);
    updateAutoBuyerWindow();
    }

    setInterval(function() {

        if (autoBuyerAmount > 0 && autoBuyerActive==true)
        {
            for (let i=0;i < autoBuyerAmount;i++)
            {
                if (pizzaStorage < maxAutoPizzas)
                {
                    BuyPizza();
                }
                
            }
        }
        



    },autoBuyerDelay);

    abField.classList.add("button-container");
    abField.appendChild(firstDiv);
    abField.appendChild(secondDiv);
    abField.appendChild(thirdDiv);
    
}




