// IMPORT MODULES under test here:
import compareNumbers from '../compare-numbers.js';

const test = QUnit.test;

test('Should return 0 when the numbers are equal, both are set to 10', function(assert) {
	//Arrange
	// Set up your parameters and expectations
    const guess = 10;
    const correctNumbers = 10;

	//Act
	// Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumbers);
	//Assert
	// Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('Should return -1 when the guess is below the correct number', function(assert) {
	//Arrange
	// Set up your parameters and expectations
    const guess = 8;
    const correctNumbers = 10;

	//Act
	// Call the function you're testing and set the result to a const
    let result = compareNumbers(guess, correctNumbers);
	//Assert
	// Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('Should return 1 when the guess is above the correct number', function(assert) {
	//Arrange
	// Set up your parameters and expectations
    const guess = 20;
    const correctNumbers = 18;

	//Act
	// Call the function you're testing and set the result to a const
    let result = compareNumbers(guess, correctNumbers);
	//Assert
	// Make assertions about what is expected valid result
    assert.equal(result, 1);
});
