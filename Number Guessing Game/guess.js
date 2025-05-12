let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector('.guess');
const submit = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const playAgain = document.querySelector('.again');

let score = 20;
let highscore = 0;
let playGame = true;

scoreDisplay.textContent = score;
playAgain.disabled = true;

// Handle guess submission
submit.addEventListener('click', function () {
    if (!playGame) return;

    const guess = parseInt(userInput.value);
    if (guess < 1 || guess > 100) {
        alert("⛔ Enter a number between 1 and 100!");
        return;
    }

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You win!";
        endGame();
        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    } else {
        if (score > 1) {
            score = score-2;
            scoreDisplay.textContent = score;
            message.textContent = guess < randomNumber ? "Too low!" : "Too high!";
        } else {
            score = 0;
            scoreDisplay.textContent = score;
            message.textContent = "💥 Game Over!";
            endGame();
        }
    }
});

// End the game and enable "Again" button
function endGame() {
    playGame = false;
    userInput.disabled = true;
    submit.disabled = true;
    playAgain.disabled = false;
}

// Restart the game
playAgain.addEventListener('click', function () {
    score = 20;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    playGame = true;
    userInput.disabled = false;
    submit.disabled = false;
    playAgain.disabled = true;
    message.textContent = "Start guessing...";
    userInput.value = '';
    scoreDisplay.textContent = score;
});
