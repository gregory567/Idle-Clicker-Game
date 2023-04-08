

const pizzaButton = document.getElementById("pizza-button");
const pizzaCounter = document.getElementById("pizza-count");
const dayCounter = document.getElementById('day-count');

let pizzasWarmedUp = 0;
let daysPassed = 0;

pizzaButton.addEventListener("click", function() {
  pizzasWarmedUp++;
  pizzaCounter.innerText = pizzasWarmedUp;
});

pizzaButton.addEventListener("click", function(){
    pizzaButton.classList.add('grow-shrink');
    setTimeout(function() {
        pizzaButton.classList.remove('grow-shrink');
    }, 50);
});

// Day counter interval function
setInterval(function() {
  daysPassed++;
  dayCounter.innerText = daysPassed;
}, 2 * 60 * 1000); // 2 minutes = 120000 milliseconds
