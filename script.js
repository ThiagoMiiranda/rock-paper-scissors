function computerPlay() {
    let playOptions = ['Rock', 'Paper', 'Scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
};

function playerPlay() {
    let playerMove = prompt("What's your move? [Rock, Paper or Scissors]");
    return playerMove.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("It's a tie! Both choose " + playerSelection);
        return -1;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log("You lose! Paper beats Rock");
            return 0;
        } else if (computerSelection == 'scissors') {
            console.log("You win! Rock beats Scissors");
            return 1;
        };
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log("You win! Paper beats Rock");
            return 1;
        } else if (computerSelection == 'scissors') {
            console.log("You lose! Scissors beats Paper");
            return 0;
        };
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log("You lose! Rock beats Scissors");
            return 0;
        } else if (computerSelection == 'paper') {
            console.log("You win! Scissors beats Paper");
            return 1;
        };
    };
};

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        
        while (roundResult == -1) {
            console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${i + 1}/5)`);
            playerSelection = playerPlay();
            computerSelection = computerPlay();
            roundResult = playRound(playerSelection, computerSelection);
        }
        
        if (roundResult == 0) {
            computerPoints++;
            console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${i + 1}/5)`);
        } else if (roundResult == 1) {
            playerPoints++;
            console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${i + 1}/5)`);
        }

        if ((playerPoints == 3) || (computerPoints == 3)) {
            break;
        }
    };
    if (playerPoints > computerPoints) {
        console.log('You defeated the computer! Congratulations!');
    } else {
        console.log('Game over! Better luck next time');
    }
};

game();

