rpsArray = ["rock", "paper", "scissors"];
let round = 1;
let playerWins = 0;
let computerWins = 0;

function play() {
  let userInput = prompt("Enter rock, paper or sciccors.");
  if (rpsArray.includes(userInput.toLowerCase()) !== false) {
    computerInput = computerPlay();
    console.log(playRound(userInput, computerInput, round));
  } else {
    alert("please enter a valid input");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    play();
    round++;
  }

  if (computerWins > playerWins) {
    return "Winner: computer";
  } else if (playerWins > computerWins) {
    return "Winner: player";
  } else {
    return "Tie!";
  }
}

function computerPlay() {
  return rpsArray[Math.floor(Math.random() * 2)];
}

function playRound(playerSelection, computerInput, round) {
  if (playerSelection === computerInput) {
    return "round: " + round + " " + computerInput + ": tie!";
  } else {
    if (playerSelection === "rock") {
      if (computerInput === "paper") {
        computerWins++;
        return "round: " + round + " " + computerInput + ": Computer wins!";
      }

      if (computerInput === "scissors") {
        playerWins++;
        return "round: " + round + " " + computerInput + ": You win!";
      }
    }

    if (playerSelection === "scissors") {
      if (computerInput === "paper") {
        playerWins++;
        return "round: " + round + " " + computerInput + ": You win!";
      }

      if (computerInput === "rock") {
        computerWins++;
        return "round: " + round + " " + computerInput + ": Computer wins!";
      }
    }

    if (playerSelection === "paper") {
      if (computerInput === "scissors") {
        computerWins++;
        return "round: " + round + " " + computerInput + ": Computer wins!";
      }

      if (computerInput === "rock") {
        playerWins++;
        return "round: " + round + " " + computerInput + ": You win!";
      }
    }
  }
}

console.log(game());
