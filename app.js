import { compareNumbers } from './compare-numbers.js';


const guessButton = document.getElementById('guess-button');
let guessInput = document.getElementById('guess-input');
let guessesLeft = document.getElementById('guesses-left');
let result = document.getElementById('result');


// Set initial state
guessInput.value = 0;
let guesses = 4;
const randomNumber = Math.floor((Math.random() * 20) + 1);
console.log(randomNumber);

// Set Event handlers
guessButton.addEventListener('click', () => {
    if (guesses > 0) {
        guesses--;
        guessesLeft.textContent = guesses;
        let guess = guessInput.value;

        if ((compareNumbers(guess, randomNumber) === 1)) {
            result.textContent = 'Too high!';
            if (guesses < 1) {
                result.textContent = 'No more guesses. Game over!';
            }
        }
        else if (compareNumbers(guess, randomNumber) === -1) {
            result.textContent = 'Too low!';
            if (guesses < 1) {
                result.textContent = 'No more guesses. Game over!';
            }
        }
        else {
            result.textContent = 'Congratulations! You win!';
        }
    }
    else return;
});
