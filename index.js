let computerSelection = ''
let playerSelection = ''
let computerScore =0
let playerScore =0
let winner
let winnerMessage =''

const container = document.querySelector('#container');

const results = document.createElement('p');
container.appendChild(results);

const pscore = document.createElement('p');
pscore.classList.add('#pscore');
container.appendChild(pscore);

const cscore = document.createElement('p');
cscore.classList.add('#cscore');
container.appendChild(cscore);

const win = document.createElement('p');
win.style.color = 'RED';
win.style.fontSize = "24px";
container.appendChild(win);

function startGame(){

  computerScore = 0;
  playerScore = 0;
  winner =''
  winnerMessage =''

  pscore.textContent = `Player Score: ${playerScore}`;

  cscore.textContent = `Computer Score: ${computerScore}`;


}

startGame()

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
        pscore.textContent = `Player Score: ${playerScore}`;
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        winner = 'computer';
        computerScore++;
        cscore.textContent = `Computer Score: ${computerScore}`;
        }
    }

    function checkScore(){
      if (computerScore === 5) {winnerMessage = "Computer Wins"; win.textContent = winnerMessage}
      if (playerScore === 5) {winnerMessage = "Player Wins"; win.textContent = winnerMessage}
    }

    const buttons = document.querySelectorAll('button');
        // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {

          // and for each one we add a 'click' listener
          button.addEventListener('click', (e) => {
            checkScore();
            computerSelection = getComputerChoice();
            playerSelection = e.target.id.toUpperCase();
            playRound(computerSelection, playerSelection);
            results.textContent = `Computer: ${computerSelection} Player: ${playerSelection} Winner: ${winner}`
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


