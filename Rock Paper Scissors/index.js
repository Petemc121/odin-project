
let userInput; 
let computerInput;
const play = document.getElementById('play');
rpsArray = ["rock", "paper", "scissors"];

play.addEventListener('click', function() {

 userInput = prompt("Enter rock, paper or sciccors.");

 if (rpsArray.includes(userInput.toLowerCase()) !== undefined)
 {
      computerInput = rpsArray[Math.floor(Math.random() * 2)];
 } else 
 {
   alert('please enter a valid input');
 }

  playRound(userInput, computerInput);
});


function playRound(playerSelection, computerInput)
{
     if (playerSelection === computerInput)
     {
        alert(computerInput + ": tie!")
     } else 
     {
       if (playerSelection === "rock")
       {
         if (computerInput === "paper")
         {
           alert(computerInput + ": Computer wins!")
         }

         if (computerInput === "scissors")
         {
           alert(computerInput + ": You win!")
         }
       }

       if (playerSelection === "scissors")
       {
         if (computerInput === "paper")
         {
           alert(computerInput + ": You win!")
         }

         if (computerInput === "rock")
         {
           alert(computerInput + ": Computer wins!")
         }
        }

         if (playerSelection === "paper")
         {
           if (computerInput === "scissors")
           {
             alert(computerInput + ": Computer wins!")
           }
  
           if (computerInput === "rock")
           {
             alert(computerInput + ": You win!")
           }
       }
     }
}


