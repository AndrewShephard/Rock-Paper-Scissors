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
        winner = 'player'
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        winner = 'computer'
        }
        return winner;
    }

function game(){
 for(let i = 0; i < 5; i++){
    playRound(computerSelection, "rock")
    if (winner == 'player') {playerScore++}
    else if (winner == 'Computer'){computerScore++}
 }
 console.log("Computer Score: " + computerScore)
 console.log("Player Score: " + playerScore)
}


getComputerChoice();

//playRound(computerSelection, "rock");

game()
