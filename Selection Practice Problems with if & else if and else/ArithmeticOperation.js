// Method to perform Operation
function findMinMax(firstNumber, secondNumber, thirdNumber) {
    let a = firstNumber + (secondNumber * thirdNumber);
    let b = (firstNumber % secondNumber) + thirdNumber;
    let c = thirdNumber + (firstNumber / secondNumber);
    let d = (firstNumber * secondNumber) + thirdNumber;

    // Finding minimum number
    let minNumber = a;

    if (b < minNumber) {
        minNumber = b;
    }
    if (c < minNumber) {
        minNumber = c;
    }
    if (d < minNumber) {
        minNumber = d;
    }
    console.log("The Min Number is: " + minNumber);

    // Finding maximum number
    let maxNumber = a;

    if (b > maxNumber) {
        maxNumber = b;
    }
    if (c > maxNumber) {
        maxNumber = c;
    }
    if (d > maxNumber) {
        maxNumber = d;
    }
    console.log("The Max Number is: " + maxNumber);
}

// Taking input as three numbers
let firstNumber = 12;
let secondNumber = 15;
let thirdNumber = 16;

// Calling method to perform operation and print minimum and maximum number
findMinMax(firstNumber, secondNumber, thirdNumber);
