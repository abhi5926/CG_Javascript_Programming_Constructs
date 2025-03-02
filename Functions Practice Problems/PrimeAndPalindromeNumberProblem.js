// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
}

// Function to get the palindrome of a number
function getPalindrome(number) {
    let reversed = 0;
    let originalNumber = number;

    while (number > 0) {
        let digit = number % 10; 
        reversed = reversed * 10 + digit; 
        number = Math.floor(number / 10);
    }
    
    return reversed;
}

// Main function to check if a number is prime and also if its palindrome is prime
function checkPrimeAndPalindrome(number) {
    // Check if the number is prime
    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
        
        // Get the palindrome of the number
        let palindrome = getPalindrome(number);
        console.log(`The palindrome of ${number} is ${palindrome}.`);
        
        // Check if the palindrome is also prime
        if (isPrime(palindrome)) {
            console.log(`The palindrome number ${palindrome} is also prime.`);
        } else {
            console.log(`The palindrome number ${palindrome} is not prime.`);
        }
    } else {
        console.log(`${number} is not a prime number.`);
    }
}

// Taking user input 
let userInput = 78;
// Calling Method
checkPrimeAndPalindrome(userInput);
