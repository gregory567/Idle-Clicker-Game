//set new winCondition and show the instructions modal for this level
winCondition= 150;
showModalLevel2();

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
    /* this is the wrongplace to check this condition -> must be checked when buying a machine
    else if (pizzaStorage==0)
    {
        newCol3.appendChild(createAdField);
    }
    */
}



function CreateAd() //Enables advertisement and removes the ability to enable it
{
    leftAd.style.opacity=1;
    curMoney+=10;
    moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
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
        automatPrice=automatPrice*(Math.pow(1.5,pizzaMultiplier));
        automatPrice=Math.round(automatPrice*100)/100; //Round to two decimals
        // display updated variables to user
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);
        currentPizzaMultiplier.innerHTML = "Current Pizza Multiplier: x" + pizzaMultiplier + "<br>";
        currentAutomatPrice.innerHTML = "Current Price of Pizza Automat: " + automatPrice + "<br>";

        // call the GeneratePizza function every second
        setInterval(GeneratePizza, 1000);
    }

    if(curMoney < pizzaPrice && pizzaStorage == 0) {
        newCol3.appendChild(createAdField);
        gameOverModal();
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
        if (pizzasWarmedUp == winCondition) {
            currentLevel++;
            GetLevel();
        }
    }
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

    if(curMoney < pizzaPrice && pizzaStorage == 0)
    {
        newCol3.appendChild(createAdField);
        gameOverModal();

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



//function that creates and displays the modal in case that the player has insufficient funds and no pizzas in storage
function gameOverModal() {

    // Create the modal element
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'gameOverModal';
    modal.tabIndex = '-1';
    modal.role = 'dialog';
    modal.setAttribute('aria-labelledby', 'gameOverModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    // Create the modal dialog element
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
    modalDialog.role = 'document';

    // Create the modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the modal header element
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    // Create the modal title element
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'gameOverModalLabel';
    modalTitle.textContent = 'Game Over?!';

    // Create the close button element
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    // Create the close button icon
    const closeButtonIcon = document.createElement('span');
    closeButtonIcon.setAttribute('aria-hidden', 'true');
    closeButtonIcon.innerHTML = '&times;';

    // Append the close button icon to the close button
    closeButton.appendChild(closeButtonIcon);

    // Append the modal title and close button to the modal header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create the modal body element
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Create the modal body content
    const modalBodyContent = document.createElement('p');
    modalBodyContent.textContent = 'You don`t have enough pizzas left and not enough money to buy new ones! Your only option is to display ads on your sites to get 10€ to buy another pizza!';

    
    // Append the modal body content to the modal body
    modalBody.appendChild(modalBodyContent);

    // Create the modal footer element
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // Create the "Let's get started!" button
    const startButton = document.createElement('button');
    startButton.type = 'button';
    startButton.classList.add('btn', 'btn-primary');
    startButton.setAttribute('data-bs-dismiss', 'modal');
    startButton.textContent = "Continue";

    // Append the "Let's get started!" button to the modal footer
    modalFooter.appendChild(startButton);

    // Append the modal header, body, and footer to the modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append the modal content to the modal dialog
    modalDialog.appendChild(modalContent);

    // Append the modal dialog to the modal
    modal.appendChild(modalDialog);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Show the modal
    $('#gameOverModal').modal('show');
}


function showModalLevel2() {

     // Create the modal element
     const modal = document.createElement('div');
     modal.classList.add('modal', 'fade');
     modal.id = 'level2Modal';
     modal.tabIndex = '-1';
     modal.role = 'dialog';
     modal.setAttribute('aria-labelledby', 'level2Modal');
     modal.setAttribute('aria-hidden', 'true');
 
     // Create the modal dialog element
     const modalDialog = document.createElement('div');
     modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');
     modalDialog.role = 'document';
 
     // Create the modal content element
     const modalContent = document.createElement('div');
     modalContent.classList.add('modal-content');
 
     // Create the modal header element
     const modalHeader = document.createElement('div');
     modalHeader.classList.add('modal-header');
 
     // Create the modal title element
     const modalTitle = document.createElement('h5');
     modalTitle.classList.add('modal-title');
     modalTitle.id = 'level2Modal';
     modalTitle.textContent = 'Congratulations, you have reached Level 2';
 
     // Create the close button element
     const closeButton = document.createElement('button');
     closeButton.type = 'button';
     closeButton.classList.add('close');
     closeButton.setAttribute('data-bs-dismiss', 'modal');
     closeButton.setAttribute('aria-label', 'Close');
 
     // Create the close button icon
     const closeButtonIcon = document.createElement('span');
     closeButtonIcon.setAttribute('aria-hidden', 'true');
     closeButtonIcon.innerHTML = '&times;';
 
     // Append the close button icon to the close button
     closeButton.appendChild(closeButtonIcon);
 
     // Append the modal title and close button to the modal header
     modalHeader.appendChild(modalTitle);
     modalHeader.appendChild(closeButton);
 
     // Create the modal body element
     const modalBody = document.createElement('div');
     modalBody.classList.add('modal-body');
 
     // Create the modal body content
     const modalBodyContent = document.createElement('p');
     modalBodyContent.textContent = 'There are no Frozen Pizzas left! You now have to buy Frozen Pizzas. It is now possible to buy Pizza Machines, that automatically create Pizzas as long as you have Frozen Pizzas left. It is now possible to buy an AutoBuyer Machines, that automatically buys Pizza as long as you have sufficient funds. To reach level 3 you need a total of '+winCondition+' Pizzas sold';
 
     
     // Append the modal body content to the modal body
     modalBody.appendChild(modalBodyContent);
 
     // Create the modal footer element
     const modalFooter = document.createElement('div');
     modalFooter.classList.add('modal-footer');
 
     // Create the "Let's get started!" button
     const startButton = document.createElement('button');
     startButton.type = 'button';
     startButton.classList.add('btn', 'btn-primary');
     startButton.setAttribute('data-bs-dismiss', 'modal');
     startButton.textContent = "Continue";
 
     // Append the "Let's get started!" button to the modal footer
     modalFooter.appendChild(startButton);
 
     // Append the modal header, body, and footer to the modal content
     modalContent.appendChild(modalHeader);
     modalContent.appendChild(modalBody);
     modalContent.appendChild(modalFooter);
 
     // Append the modal content to the modal dialog
     modalDialog.appendChild(modalContent);
 
     // Append the modal dialog to the modal
     modal.appendChild(modalDialog);
 
     // Append the modal to the body
     document.body.appendChild(modal);
 
     // Show the modal
     $('#level2Modal').modal('show');
 }




