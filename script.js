function computerPlay() {
    let playOptions = ['Rock', 'Paper', 'Scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return ("It's a tie! Both choose " + playerSelection);
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return "You lose! Paper beats Rock";
        } else if (computerSelection == 'scissors') {
            return "You win! Rock beats Scissors";
        };
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return "You win! Paper beats Rock";
        } else if (computerSelection == 'scissors') {
            return "You lose! Scissors beats Paper";
        };
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection == 'paper') {
            return "You win! Scissors beats Paper";
        };
    };
};

const playerSelection = 'Scissors';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));




/*
If same input then it's a tie
else if
player 'rock' comp 'paper' = you lose
player 'rock' comp 'scissors' = you win
player 'paper' comp 'rock' = you win
player 'paper' comp 'scissors' = you lose
player 'scissors' comp 'rock' = you lose
player 'scissors' comp 'paper' = you win
*/
