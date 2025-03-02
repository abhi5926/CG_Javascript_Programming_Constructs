// Function to compute Prime factor using Primefactorization method
function primeFactors(N) {
    while (N % 2 === 0) {
        console.log(2); 
        N = N / 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            console.log(i); 
            N = N / i;
        }
    }

    if (N > 2) {
        console.log(N); 
    }
}

// taking number as input
let N = 56; 

// Calling the function to compute prime factors of N
console.log(`Prime factors of ${N} are:`);
primeFactors(N);
