import { compareNumbers } from './compare-numbers.js';

const guessButton = document.getElementById('guess-button');
let guessInput = document.getElementById('guess-input');
let guessesLeft = document.getElementById('guesses-left');
let result = document.getElementById('result');
const instructions = document.getElementById('instructions');


// Set initial state
guessInput.value = 10;
let guesses = 4;
const randomNumber = Math.floor((Math.random() * 20) + 1);

// Set Event handlers
guessButton.addEventListener('click', () => {
    instructions.textContent = '';
    if (guesses > 0) {
        guesses--;
        guessesLeft.textContent = guesses;
        let guess = Number(guessInput.value);

        if ((compareNumbers(guess, randomNumber) === 1)) {
            result.textContent = 'Too high!';

        }
        else if (compareNumbers(guess, randomNumber) === -1) {
            result.textContent = 'Too low!';
        }
        else if (compareNumbers(guess, randomNumber) === 0) {
            result.textContent = 'Congratulations! You win!';
            result.style.color = 'green';
            guessButton.disabled = true;
        }

        else {
            result.textContent = 'Unexpected output.';
        }
    }
    gameOverCheck();
});

function gameOverCheck() {
    if (guesses < 1) {
        result.textContent = 'No more guesses. Game over!';
        result.style.color = 'red';
        guessButton.disabled = true;
    }
}
