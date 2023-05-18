
// create a new div with class "col-3": column for advertisement
const advertisementCol3 = document.createElement("div");
advertisementCol3.setAttribute("class","col-3");

// create a new div with id "advertisement": button container for advertisement
const advertisementDiv = document.createElement("div");
advertisementDiv.id = "advertisement";
advertisementDiv.classList.add("button-container");

// create a new button to distribute flyers
const flyerButton = document.createElement("button");
flyerButton.setAttribute("onclick", "increaseFlyerPrice()"); 
flyerButton.innerHTML = "Distribute Flyers";

//initial cost of distributing flyers is 100 (increases exponentially with each purchase/click)
var flyerPrice = 100;
const flyerText = document.createElement("element");
flyerText.innerText = "Cost: " + flyerPrice;

//add the flyer text and flyer button to the advertisement div
advertisementDiv.appendChild(flyerText);
advertisementDiv.appendChild(flyerButton);


// create a new button to start a poster campaign
const posterButton = document.createElement("button");
posterButton.setAttribute("onclick", "increasePosterPrice()");
posterButton.innerHTML = "Poster Campaign";

//initial cost of starting a poster campaign is 100 (increases exponentially with each purchase/click)
var posterPrice = 100;
const posterText = document.createElement("element");
posterText.innerHTML = "Cost: " + posterPrice;

//add the poster text and poster button to the advertisement div
advertisementDiv.appendChild(posterText);
advertisementDiv.appendChild(posterButton);

//add the advertisement feature to the page
advertisementCol3.appendChild(advertisementDiv);
document.getElementById("third_row").appendChild(advertisementCol3);


// function for increasing the poster price exponentiell
function increasePosterPrice() {
    if(curMoney >= posterPrice) {
        curMoney-=posterPrice;
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);

        posterPrice = posterPrice*1.5;
        posterPrice = Math.round(posterPrice*100)/100;
        posterText.innerHTML = "Cost: " + posterPrice;
        setDemand(10); //posters give a 10% boost of the current demand 
    }
}

// function for increasing the flyer price exponentiell
function increaseFlyerPrice() {
    if(curMoney >= flyerPrice) {
        curMoney-=flyerPrice;
        moneyCounter.innerText = parseFloat(curMoney).toFixed(2);

        flyerPrice = flyerPrice*1.5;
        flyerPrice = Math.round(flyerPrice*100)/100;
        flyerText.innerHTML = "Cost: " + flyerPrice;
        setDemand(25); //flyers give a 25% boost of the current demand
    }
}

function setDemand(boostPercentage) {
    let increasedDemand = parseInt(pizzaDemand * (1+(boostPercentage/100)));
    setPizzaDemand(increasedDemand);
}