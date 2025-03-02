// Function to check if a number is a palindrome
function isPalindrome(number) {
    let originalNumber = number;
    let reversedNumber = 0;

    // Reverse the number
    while (number > 0) {
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }

    
    return originalNumber === reversedNumber;
}

// Function to check if both numbers are palindromes
function checkIfBothArePalindromes(num1, num2) {
    const isNum1Palindrome = isPalindrome(num1);
    const isNum2Palindrome = isPalindrome(num2);

    if (isNum1Palindrome && isNum2Palindrome) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isNum1Palindrome) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isNum2Palindrome) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`Neither ${num1} nor ${num2} is a palindrome.`);
    }
}

// Method calling
checkIfBothArePalindromes(121, 123);  

