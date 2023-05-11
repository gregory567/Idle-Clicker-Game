
// create a new div with class "col-3": column for advertisement
const advertisementCol3 = document.createElement("div");
advertisementCol3.setAttribute("class","col-3");

// create a new div with id "advertisement": button container for advertisement
const advertisementDiv = document.createElement("div");
advertisementDiv.id = "advertisement";
advertisementDiv.classList.add("button-container");

// create a new button to distribute flyers
const flyerButton = document.createElement("button");
flyerButton.addEventListener("click", setDemand(20)); //flyers give a 20% boost of the current demand 
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
posterButton.addEventListener("click", setDemand(10)); //posters give a 10% boost of the current demand 
posterButton.innerHTML = "Poster Campaign";

//initial cost of starting a poster campaign is 100 (increases exponentially with each purchase/click)
var posterPrice = 100;
const posterText = document.createElement("element");
posterText.innerText = "Cost: " + posterPrice;

//add the poster text and poster button to the advertisement div
advertisementDiv.appendChild(posterText);
advertisementDiv.appendChild(posterButton);

//add the advertisement feature to the page
advertisementCol3.appendChild(advertisementDiv);
document.getElementById("third_row").appendChild(advertisementCol3);


function setDemand(boostPercentage) {
    let increaseDemand = parseInt(pizzaDemand/100 * boostPercentage);
    increasePizzaDemand(increaseDemand);    
}