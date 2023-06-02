var initialHighscores = [
    { name: 'Playername', score: pizzasWarmedUp },
    { name: 'Osteria Mamma Mia', score: 700 },
    { name: 'Pizzeria Bella Napoli', score: 600 },
    { name: 'Ristorante Buon Appetito', score: 500 },
    { name: 'Il Gusto Italiano', score: 400 },
];



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
    highscoreListDiv.appendChild(highscoreList);
}





  // Initial highscore list generation
generateHighscoreList(initialHighscores);


pizzasWarmedUp = 4000;
initialHighscores[4].score = pizzasWarmedUp;
initialHighscores[1].score = 8000;

setTimeout(function(){
  generateHighscoreList(initialHighscores);
}, 2000);

/*
// Simulating an update with rank changes
setTimeout(() => {
  const updatedHighscores = [
    { name: 'Player C', score: 300 },
    { name: 'Player A', score: 550 },
    { name: 'Player B', score: 400 },
    { name: 'Player E', score: 100 },
    { name: 'Player D', score: 200 },
  ];

  generateHighscoreList(updatedHighscores);
}, 2000);

*/