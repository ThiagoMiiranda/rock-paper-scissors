function computerPlay() {
    let playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
};

function appendText(feedResult) {
    const playFeed = document.querySelector('.play-feed');
    const paragraph = document.createElement('p');

    paragraph.textContent = feedResult;
    playFeed.appendChild(paragraph);
}

function updateDOMScore() {
    const roundScore = document.querySelector('#round');
    const winScore = document.querySelector('#win');
    const lossScore = document.querySelector('#loss');

    roundScore.innerText = round;
    winScore.innerText = playerPoints;
    lossScore.innerText = computerPoints;
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
        
        updateDOMScore();
        //console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${round}/5)`);
    } else if (roundResult == 1) {
        playerPoints++;
        round++;

        updateDOMScore();
        //console.log(`(Win-${playerPoints}/Loss-${computerPoints}) Round (${round}/5)`);
    }

    if ((playerPoints == 3) || (computerPoints == 3)) {
        if (playerPoints > computerPoints) {
            let result = 'You defeated the computer! Congratulations!';
            appendText(result);

            const matchResult = document.querySelector('#match-result');
            matchResult.innerText = result;

            return true;
        } else {
            let result = 'Game over! Better luck next time';
            appendText(result);

            const matchResult = document.querySelector('#match-result');
            matchResult.innerText = result;

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

    updateDOMScore();

    const playFeed = document.querySelector('.play-feed');
    playFeed.innerText = '';

    const tryAgainDiv = document.querySelector('.try-again-div');
    tryAgainDiv.style.visibility = 'hidden';
});



