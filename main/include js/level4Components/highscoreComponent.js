
// create a new div with class "col-3": column for advertisement
const highscoreCol3 = document.createElement("div");
highscoreCol3.setAttribute("class","col-3");

// create a new div with id "advertisement": button container for advertisement
const highscoreDiv = document.createElement("div");
highscoreDiv.id = "highscore";

var competitorA = 'Osteria Mamma Mia';
var competitorB = 'Pizzeria Bella Napoli';
var competitorC = 'Ristorante Buon Appetito';
var competitorD = 'Il Gusto Italiano';

var initialHighscores = [
    { name: playerName, score: pizzasWarmedUp },
    { name: 'Osteria Mamma Mia', score: 700 },
    { name: 'Pizzeria Bella Napoli', score: 600 },
    { name: 'Ristorante Buon Appetito', score: 500 },
    { name: 'Il Gusto Italiano', score: 400 },
];


/*//first try
// Function to generate the highscore list
function generateHighscoreList(highscores) {
    highscores.sort((a, b) => b.score - a.score);
    const highscoreList = document.createElement('ul');
    highscoreList.innerHTML = '';
  
    for (let i = 0; i < highscores.length; i++) {
      const highscore = highscores[i];
      const listItem = document.createElement('li');
      listItem.innerText = `${i + 1}. ${highscore.name} - ${highscore.score}`;
      highscoreList.appendChild(listItem);
    }

    
    const highscoreListDiv = document.getElementById('highscoreListDiv');
    highscoreListDiv.innerHTML = '';
    highscoreListDiv.appendChild(highscoreList);
    
    const highscoreListDiv = $('#highscoreListDiv');
    highscoreListDiv.hide(); // Hide the highscore list initially
    highscoreListDiv.empty().append(highscoreList);
    highscoreListDiv.slideDown('slow'); // Slide down to display the highscore list
}
*/




// Function to generate the highscore list with element animations
function generateHighscoreList(highscores) {
  highscores.sort((a, b) => b.score - a.score);
  const highscoreList = $('<ul></ul>');

  for (let i = 0; i < highscores.length; i++) {
    const highscore = highscores[i];
    const listItem = $('<li></li>').text(`${i + 1}. ${highscore.score} - ${highscore.name}`);
    highscoreList.append(listItem);
    
    // Apply animation to each list item
    listItem.hide().delay(i * 200).fadeIn('slow');
  }

  const highscoreListDiv = $('#highscore-container');
  highscoreListDiv.empty().append(highscoreList);
  highscoreListDiv.show();
  highscoreDiv.append(highscoreListDiv);

  const thirdRow = document.getElementById("third_row");
  thirdRow.append(highscoreDiv);


}





generateHighscoreList(initialHighscores);

//dummy data
pizzasWarmedUp = 4000;
initialHighscores[4].score = pizzasWarmedUp;
initialHighscores[1].score = 8000;

//calls the update functions for the highscores every 5 seconds
setInterval(function(){
  updateHighscoreUser(initialHighscores);
  updateHighscoreCompetitorA(initialHighscores);
  updateHighscoreCompetitorB(initialHighscores);
  updateHighscoreCompetitorC(initialHighscores);
  updateHighscoreCompetitorD(initialHighscores);
  generateHighscoreList(initialHighscores);
}, 5000);


//updates the highscore of the user in the initialHighscore array with the pizzasWarmedUp
function updateHighscoreUser(highscores) {
  for (var i = 0; i < highscores.length; i++) {
    if (highscores[i].name === playerName) {
      console.log(playerName);
        highscores[i].score = pizzasWarmedUp;
        break; 
      }
  }
}



//function for highscore development of competitor A
function updateHighscoreCompetitorA(highscores) {


}

//function for highscore development of competitor B
function updateHighscoreCompetitorB(highscores) {


}

//function for highscore development of competitor C
function updateHighscoreCompetitorC(highscores) {


}

//function for highscore development of competitor D
function updateHighscoreCompetitorD(highscores) {

}