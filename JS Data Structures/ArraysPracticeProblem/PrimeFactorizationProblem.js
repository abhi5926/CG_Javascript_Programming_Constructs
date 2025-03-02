// Function to get the prime factors of a number
function getPrimeFactors(n) {
    let primeFactors = [];
    
    // Check for the number of 2s that divide n
    while (n % 2 === 0) {
        primeFactors.push(2); 
        n = n / 2;
    }
    
    
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            primeFactors.push(i); 
            n = n / i; 
        }
    }
    
    if (n > 2) {
        primeFactors.push(n);
    }
    
    return primeFactors;
}

// Function to display 
function displayPrimeFactors(n) {
    let primeFactors = getPrimeFactors(n);
    console.log(primeFactors);
}


let number = 56; 
displayPrimeFactors(number);
