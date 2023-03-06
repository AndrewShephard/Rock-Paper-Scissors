let computerSelection = ''
let playerSelection = ''
let computerScore =0
let playerScore =0
let winner

function getComputerChoice() {
    let computerRoll = Math.floor(Math.random() * 3)
    if (computerRoll == 0) {computerSelection = 'ROCK'}
    else if (computerRoll == 1) {computerSelection = 'PAPER'}
    else {computerSelection = 'SCISSORS'}
    return computerSelection;
};

function playRound(computerSelection, playerSelection){
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection === computerSelection) {
        winner = 'tie'
      }
      if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        winner = 'player';
        playerScore++;
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        winner = 'computer';
        computerScore++;
        }
    }

function game(){
 for(let i = 0; i < 5; i++){
    computerSelection = getComputerChoice()
    playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    playRound(computerSelection, playerSelection)
    console.log("Computer: "+ computerSelection + " Player: "+ playerSelection + " Winner:" + winner)
 }
 console.log("Computer Score: " + computerScore)
 console.log("Player Score: " + playerScore)
}



//playRound(computerSelection, "rock");

game()
