
import { updateFeedback } from './update-feedback.js';

const guessButton = document.getElementById('guess-button');
let guessInput = document.getElementById('guess-input');
let guessesLeft = document.getElementById('guesses-left');
let result = document.getElementById('result');
const instructions = document.getElementById('instructions');
const randomNumber = Math.floor((Math.random() * 20) + 1);

// Set initial state
guessInput.value = 10;
let guesses = 4;

// Set Event handlers
guessButton.addEventListener('click', () => {
    instructions.textContent = '';
    if (guesses > 0) {
        guesses--;
        guessesLeft.textContent = guesses;
        updateFeedback(randomNumber);
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
