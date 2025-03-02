// Function to compute the factorial of a number
function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers"; 
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result; 
}

// Taking number as input
let number = 5; 

// Calling Method
let ans = factorial(number);

// Display result
console.log(ans);
