rpsArray = ["rock", "paper", "scissors"];
let round = 1;
let playerWins = 0;
let computerWins = 0;
const playerSelection = document.querySelectorAll('.playerSelection');
const text = document.querySelector('#text');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');


for (let i = 0; i < playerSelection.length; i++)
{
  playerSelection[i].addEventListener('click', function() {
   play(this.id);
  })

}

function play(selection) {
  userInput = selection;
  computerInput = computerPlay();
  playRound(userInput, computerInput)
}
  

function computerPlay() {
  return rpsArray[Math.floor(Math.random() * 2)];
}

function playRound(playerSelection, computerInput) {
  if (playerSelection === computerInput) {
   text.innerHTML = computerInput + ": tie!";
  } else {
    if (playerSelection === "rock") {
      if (computerInput === "paper") {
        computerWins++;
        text.innerHTML = computerInput + ": Computer wins!";
      }

      if (computerInput === "scissors") {
        playerWins++;
        text.innerHTML = computerInput + ": You win!";
      }
    }

    if (playerSelection === "scissors") {
      if (computerInput === "paper") {
        playerWins++;
        text.innerHTML = computerInput + ": You win!";
      }

      if (computerInput === "rock") {
        computerWins++;
        text.innerHTML = computerInput + ": Computer wins!";
      }
    }

    if (playerSelection === "paper") {
      if (computerInput === "scissors") {
        computerWins++;
        text.innerHTML = computerInput + ": Computer wins!";
      }

      if (computerInput === "rock") {
        playerWins++;
        text.innerHTML = computerInput + ": You win!";
      }
    }
  }

  computerPoints.textContent = computerWins;
  playerPoints.textContent = playerWins;

  if (computerWins == 5) {
    alert("Winner: computer")
   reset();
  } else if (playerWins == 5) {
    alert("Winner: player")
    reset();

  }
}
function reset() {
  playerWins = 0;
  computerWins = 0;
  computerPoints.textContent = computerWins;
  playerPoints.textContent = playerWins;
  text.textContent = "";
}
