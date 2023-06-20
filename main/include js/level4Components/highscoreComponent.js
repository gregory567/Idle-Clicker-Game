
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
    { name: competitorA, score: 8000 },
    { name: competitorB, score: 6043 },
    { name: competitorC, score: 5090 },
    { name: competitorD, score: 10000 },
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

/*
// test dummy data
pizzasWarmedUp = 4000;
initialHighscores[4].score = pizzasWarmedUp;
initialHighscores[1].score = 8000;
*/

//calls the update functions for the highscores every 5 seconds
const intervalID = setInterval(function(){
  updateHighscoreUser(initialHighscores);
  updateHighscoreCompetitorA(initialHighscores);
  updateHighscoreCompetitorB(initialHighscores);
  updateHighscoreCompetitorC(initialHighscores);
  updateHighscoreCompetitorD(initialHighscores);
  generateHighscoreList(initialHighscores);
  if (initialHighscores[0].name === playerName) {
    showModalWin();
    clearInterval(intervalID);
  }
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
      let player = initialHighscores.find(function (element) {
        return element.name === competitorA;
      });
      
      // Increase the score of competitor A by a random amount between 50 and 100
      let randomIncrease = Math.floor(Math.random() * 51) + 50;
      player.score += randomIncrease;
  
}

//function for highscore development of competitor B
function updateHighscoreCompetitorB(highscores) {

    let player = initialHighscores.find(function (element) {
      return element.name === competitorB;
    });

    // Decrease the score of competitor B by a random amount between 10 and 50
    let randomIncrease = Math.floor(Math.random() * 41) + 10;
    player.score += randomIncrease;
    
}

//function for highscore development of competitor C
function updateHighscoreCompetitorC(highscores) {

    let player = initialHighscores.find(function (element) {
      return element.name === competitorC;
    });
    // Increase the score of competitor C by a random amount between 20 and 80
    let randomIncrease = Math.floor(Math.random() * 61) + 20;
    player.score += randomIncrease;
    
}

//function for highscore development of competitor D
function updateHighscoreCompetitorD(highscores) {
  let player = initialHighscores.find(function (element) {
    return element.name === competitorD;
  });  
  let randomIncrease = Math.floor(Math.random() * 41) + 30;

  // Decrease the score of competitor D by a random amount between 30 and 70  var randomIncrease = Math.floor(Math.random() * 61) + 20;
  player.score += randomIncrease;

}