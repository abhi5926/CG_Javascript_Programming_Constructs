const n = 5;

if (isNaN(n) || n <= 0) {
  console.log('Please provide a positive integer as the command-line argument.');
  process.exit(1);
}

let harmonicNumber = 0;

for (let i = 1; i <= n; i++) {
  harmonicNumber += 1 / i;
}

console.log("The nth harmonic number is:"+ harmonicNumber);
