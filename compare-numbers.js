export const compareNumbers = (guess, correctNumbers) => {
    if (guess === correctNumbers) return 0;
    else if (guess > correctNumbers) return 1;
    else if (guess < correctNumbers) return -1;
};
export default compareNumbers;
