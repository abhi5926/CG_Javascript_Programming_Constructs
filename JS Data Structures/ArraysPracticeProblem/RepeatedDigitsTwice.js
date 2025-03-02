// Function to find numbers with repeated digits 
function findRepeatedDigits() {
    let repeatedDigits = [];

    // Iterate through the range from 0 to 100
    for (let i = 0; i <= 100; i++) {
        let numString = i.toString();

        // Check if the number has repeated digits
        if (numString[0] === numString[1]) {
            repeatedDigits.push(i); 
        }
    }

    return repeatedDigits;
}

// Call the function to find numbers with repeated digits
let result = findRepeatedDigits();

// Display the result
console.log("Numbers with repeated digits:", result);
