let computerSelection = ''
let playerSelection = ''
let computerScore =0
let playerScore =0
let winner
let winnerMessage =''

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

    function checkScore(){
      if (computerScore === 5) {winnerMessage = "Computer Wins";prompt(winnerMessage)}
      if (playerScore === 5) {winnerMessage = "Player Wins";prompt(winnerMessage)}
    }

    const buttons = document.querySelectorAll('button');
        // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {

          // and for each one we add a 'click' listener
          button.addEventListener('click', (e) => {
            console.log(e.target.id);
            computerSelection = getComputerChoice();
            playerSelection = e.target.id.toUpperCase();
            playRound(computerSelection, playerSelection);
            checkScore();
            console.log("Computer: "+ computerSelection + " Player: "+ playerSelection + " Winner:" + winner)
            console.log("Computer Score: " + computerScore)
            console.log("Player Score: " + playerScore)
          });
        });

// function game(){
//  for(let i = 0; i < 5; i++){
//     computerSelection = getComputerChoice()
//     playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
//     playRound(computerSelection, playerSelection)
//     console.log("Computer: "+ computerSelection + " Player: "+ playerSelection + " Winner:" + winner)
//  }
//  console.log("Computer Score: " + computerScore)
//  console.log("Player Score: " + playerScore)
//  if (computerScore > playerScore) {console.log("Computer Wins!")}
//  else if (playerScore > computerScore){console.log("Player Wins!")}
//  else {console.log("Tie!")}
// }



//playRound(computerSelection, "rock");


