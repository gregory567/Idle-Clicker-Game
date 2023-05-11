// create a new div with class "col-3"
const advertisementCol3 = document.createElement("div");
advertisementCol3.setAttribute("class","col-3");



// create a new div with id "advertisement"
const advertisementDiv = document.createElement("div");
advertisementDiv.id = "advertisement";
advertisementDiv.classList.add("button-container");



// create a new button to distribute flyers
const flyerButton = document.createElement("button");
flyerButton.addEventListener("click", setDemand);
flyerButton.innerHTML = "Distribute Flyers";

//cost to distribute flyer
var flyerPrice = 100;
const flyerText = document.createElement("element");
flyerText.innerText = "Cost: " + flyerPrice;

advertisementDiv.appendChild(flyerText);
advertisementDiv.appendChild(flyerButton);


// create a new button to put up posters
const posterButton = document.createElement("button");
posterButton.addEventListener("click", setDemand);
posterButton.innerHTML = "Distribute Posters";

//cost to distribute flyer
var posterPrice = 100;
const posterText = document.createElement("element");
posterText.innerText = "Cost: " + posterPrice;

advertisementDiv.appendChild(posterText);
advertisementDiv.appendChild(posterButton);


advertisementCol3.appendChild(advertisementDiv);

document.getElementById("third_row").appendChild(advertisementCol3);


function setDemand() {
    let increaseDemand = parseInt(demand/100 *20);
    increasePizzaDemand(increaseDemand);    
}