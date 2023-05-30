$(document).ready(function() {
    console.log("Events loaded!");
  });


const eventBar = document.createElement("div");
eventBar.classList.add("eventBar");
const eventName = document.createElement("a");
const eventdesc = document.createElement("a");
eventBar.appendChild(eventName);
eventBar.appendChild(eventdesc);
eventBar.style.opacity=0;
document.body.appendChild(eventBar);
var eventChance=10; //Percentage of an event happening every x seconds
var eventInterval=60000; //Every x/1000 seconds, there is a chance of an event happening
var eventPityChance=1; //If no event happens, increase this counter by something
var eventActive=false; //Event can only be triggered if no event is active 

var currentEvent=null;

//IMPORTANT: When adding a new event, make sure you also add it to the event list further below or else it cannot be randomly picked!


class RandomEvent {

    constructor(name,duration) 
    {
        this.name=name;
        this.duration=duration;
        

    }
    onEventEnd() {
        currentEvent=null;
        console.log("Event " + this.name + " has ended!");
        eventBar.style.opacity=0;
        eventActive=false;
        
    }
    setDescription(desc) {
        this.description=desc;
    }
    triggerEvent() {
        currentEvent=this;
        eventActive=true;
        eventPityChance=1;
        eventBar.style.opacity=1;
        console.log("Event "+this.name+" was triggered");
        eventName.innerHTML = "<h1>"+ this.name + "</h1>";
        eventdesc.innerHTML = "<h3>"+this.description+"</h3>";
        
        setTimeout(()=>
        {
            clearInterval(this.interval);
            this.onEventEnd();
        },this.duration)
    }
    
    

}

function StopEvent() {
    if (eventActive==true)
    {
        currentEvent.onEventEnd();
    }
}



class PizzaSaleEvent extends RandomEvent { //Create new subclass for event
    onEventEnd() { //Override the event trigger and end functions
        pizzaPrice=1.50;
        pizzaPriceContainer.innerHTML = "Current Price: €" + parseFloat(pizzaPrice).toFixed(2) + "<br>";
        super.onEventEnd();
    }
    triggerEvent(){
        pizzaPrice=0.75;
        pizzaPriceContainer.innerHTML = "Current Price: €" + parseFloat(pizzaPrice).toFixed(2) + "<br>";
        super.triggerEvent();
    }
}
const pizzaSale = new PizzaSaleEvent("Massive Sale",80000); //Create event object
pizzaSale.setDescription("Frozen pizzas are half price for a limited time!"); //Set description
function TriggerPizzaSale() { //Create trigger function
    pizzaSale.triggerEvent();
}

class InflationEvent extends RandomEvent {
    onEventEnd() {
        pizzaPrice=1.50;
        pizzaPriceContainer.innerHTML = "Current Price: €" + parseFloat(pizzaPrice).toFixed(2) + "<br>";
        super.onEventEnd();
    }
    triggerEvent(){
        pizzaPrice=4.50;
        pizzaPriceContainer.innerHTML = "Current Price: €" + parseFloat(pizzaPrice).toFixed(2) + "<br>";
        super.triggerEvent();
    }
}
const inf = new InflationEvent("Sudden Inflation",100000);
inf.setDescription("Due to sudden inflation, frozen pizzas are far more expensive! We recommend disabling AutoBuyers.");
function TriggerInflation() {
    inf.triggerEvent();
}



class FestivalEvent extends RandomEvent {
    onEventEnd() {
        decreaseDemandInstant(150);
        super.onEventEnd();
    }
    triggerEvent(){
        increaseDemand(150);
        super.triggerEvent();
    }
}
const festival = new FestivalEvent("Pizza Festival",240000);
festival.setDescription("The Pizza Festival is taking place! Demand is massively boosted!");
function TriggerFestival() {
    festival.triggerEvent();
}

class PowerEvent extends RandomEvent {
    onEventEnd() {
        autoOn = true;
        super.onEventEnd();
    }
    triggerEvent(){
        autoOn=false;
        super.triggerEvent();
    }
}
const powerOutage = new PowerEvent("Power Outage",120000);
powerOutage.setDescription("There is a power outage! All machines have stopped working!");
function TriggerPO() {
    powerOutage.triggerEvent();
}






//Pool of events that can be picked from
const eventFunctionsList = [TriggerFestival,TriggerInflation,TriggerPO,TriggerPizzaSale];

eInterval = setInterval(function() {

    if (eventActive==false)
    {
        var chance = Math.floor(Math.random()*100);
        if (chance <= eventChance * eventPityChance)
        {
            var x = Math.floor(Math.random()*eventFunctionsList.length-1) //Pick random event
            let result = eventFunctionsList[x](); //Trigger event
        }
        else 
        {
        eventPityChance+=0.35; //Chance of getting an event increases slightly every time you do not get one
        }
    }
    
},eventInterval)

function SetEventInterval(num) { //Use this function for testing
    eventInterval=num*1000;
    clearInterval(eInterval);

    eInterval = setInterval(function() {

        if (eventActive==false)
        {
            var chance = Math.floor(Math.random()*100);
            if (chance <= eventChance * eventPityChance)
            {
                var x = Math.floor(Math.random()*eventFunctionsList.length-1)
                let result = eventFunctionsList[x]();
            }
            else 
            {
            eventPityChance+=0.35;
            }
        }
        
    },eventInterval)
    
}