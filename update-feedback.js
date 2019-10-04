import { compareNumbers } from './compare-numbers.js';
export const updateFeedback = (randomNumber) => {

    const guessButton = document.getElementById('guess-button');
    let result = document.getElementById('result');
    let guessInput = document.getElementById('guess-input');
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
};