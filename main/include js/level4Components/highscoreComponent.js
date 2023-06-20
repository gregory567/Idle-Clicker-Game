
// Create the outer div element with class "col-3"
const colDiv = $('<div>').addClass('col-3');

// Create the inner div element with classes "button-container" and "highscore-container", and set its id
const highscoreListDiv = $('<div>').addClass('button-container').attr('id', 'highscore-container');

// Append the inner div element to the outer div element
colDiv.append(highscoreListDiv);

// Append the outer div element to the desired parent element in the DOM
$('#second_row').append(colDiv);


const competitorA = 'Osteria Mamma Mia';
const competitorB = 'Pizzeria Bella Napoli';
const competitorC = 'Ristorante Buon Appetito';
const competitorD = 'Il Gusto Italiano';

var initialHighscores = [
    { name: playerName, score: pizzasWarmedUp },
    { name: competitorA, score: 700 },
    { name: competitorB, score: 600 },
    { name: competitorC, score: 500 },
    { name: competitorD, score: 400 },
];


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

  highscoreListDiv.empty().append(highscoreList);
  highscoreListDiv.show();

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