

const pizzaButton = document.getElementById("pizza-button");
const pizzaCounter = document.getElementById("pizza-count");

let count = 0;

pizzaButton.addEventListener("click", function() {
  count++;
  pizzaCounter.innerText = count;
});

pizzaButton.addEventListener("click", function(){
    pizzaButton.classList.add('grow-shrink');
    setTimeout(function() {
        pizzaButton.classList.remove('grow-shrink');
    }, 50);
});
