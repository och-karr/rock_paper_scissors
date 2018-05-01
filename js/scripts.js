//przycisk zainicjowania nowej gry
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

// wybor gracza
var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//zainicjowanie wartosci poczatkowych
var gameState = 'notStarted';  //notStarted //started // ended
var player = {
        name: '',
        score: 0
    };
var computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');

//wyswietlanie elementow na stronie w zaleznosci od stanu gry
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

//wywolanie funkcji
setGameElements();

//rozpoczecie gry. zdefiniowanie zmiennych ktore sie beda aktualizowac
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

//funkcja uruchamiana po kliknieciu new game
function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) { //ustawiamy imie gracza
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    // playerNameElem.innerHTML = player.name;
    // setGamePoints();
  }
}

//funkcja wywolywana za kazdym razem gdy uzytkownicz wybierze inie
function playerPick(playerPick) {
  console.log(playerPick);
}

//ustawianie losowego wyboru gracza
function getComputerPick() {
  var possiblePicks = ['rock', 'paper', 'scissors'];
  return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');


//logika i przyznawanie punktow
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
        playerPointsElem.innerHTML = player.score;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
        computerPointsElem.innerHTML = computer.score;
    }

}

//umieszczenie wyniku na stronie
function playerPick(playerPick) {
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;

  checkRoundWinner(playerPick, computerPick);
}


// function setGamePoints() {
//   playerPointsElem.innerHTML = player.score;
//   computerPointsElem.innerHTML = computer.score;
//   console.log(player.score);
// }
