let computerSelection = ''
let playerSelection = ''
let winner

function getComputerChoice() {
    let computerRoll = Math.floor(Math.random() * 3)
    console.log("Computer Roll: " + computerRoll)
    if (computerRoll == 0) {computerSelection = 'ROCK'}
    else if (computerRoll == 1) {computerSelection = 'PAPER'}
    else {computerSelection = 'SCISSORS'}
    console.log(computerSelection)
};

function playRound(computerSelection, playerSelection){
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
}

getComputerChoice();
