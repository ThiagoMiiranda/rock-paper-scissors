function computerPlay() {
    let playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
};
/*
function playerPlay() {
    let playOptions = ['rock', 'paper', 'scissors'];
    let playerMove;
    while (true) {
        playerMove = prompt("What's your move? [Rock, Paper or Scissors]").toLowerCase();
        for (let i = 0; i < 3; i++) {
            if (playerMove == playOptions[i]) {
                return playerMove;
            }
        }
        alert('Invalid command, please insert [Rock, Paper or Scissors]');
    }
}
*/
function appendText(feedResult) {
    const playFeed = document.querySelector('.play-feed');
    const paragraph = document.createElement('p');

    paragraph.textContent = feedResult;
    playFeed.appendChild(paragraph);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let result = "It's a tie! Both choose " + playerSelection;
        appendText(result);
        return -1;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            let result = "You lose! Paper beats Rock";
            appendText(result);
            return 0;
        } else if (computerSelection == 'scissors') {
            let result = "You win! Rock beats Scissors";
            appendText(result);
            return 1;
        };
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            let result = "You win! Paper beats Rock";
            appendText(result);
            return 1;
        } else if (computerSelection == 'scissors') {
            let result = "You lose! Scissors beats Paper";
            appendText(result);
            return 0;
        };
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            let result = "You lose! Rock beats Scissors";
            appendText(result);
            return 0;
        } else if (computerSelection == 'paper') {
            let result = "You win! Scissors beats Paper";
            appendText(result);
            return 1;
        };
    };
};

function score(roundResult) {
    if (roundResult == 0) {
        computerPoints++;
        round++;
        console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${round}/5)`);
    } else if (roundResult == 1) {
        playerPoints++;
        round++;
        console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${round}/5)`);
    }

    if ((playerPoints == 3) || (computerPoints == 3)) {
        if (playerPoints > computerPoints) {
            console.log('You defeated the computer! Congratulations!');
            return true;
        } else {
            console.log('Game over! Better luck next time');
            return true;
        }
    }
    
};

let playerPoints = 0;
let computerPoints = 0;
let round = 0;

const buttons = document.querySelectorAll('.game-button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerPlay = e.target.innerText.toLowerCase();
        let roundResult = playRound(playerPlay, computerPlay());
        let isMatchFinished = score(roundResult);
        if (isMatchFinished) {
            const tryAgainDiv = document.querySelector('.try-again-div');
            tryAgainDiv.style.visibility = 'inherit';
        }
    });
});

const playAgainBtn = document.querySelector('#play-again-btn');
playAgainBtn.addEventListener('click', (e) => {
    playerPoints = 0;
    computerPoints = 0;
    round = 0;

    const playFeed = document.querySelector('.play-feed');
    playFeed.innerText = '';

    const tryAgainDiv = document.querySelector('.try-again-div');
    tryAgainDiv.style.visibility = 'hidden';
});



