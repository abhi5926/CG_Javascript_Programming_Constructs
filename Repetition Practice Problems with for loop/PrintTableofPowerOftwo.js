const n = 5;

if (isNaN(n) || n < 0) {
  console.log('Please provide a non-negative integer as the command-line argument.');
  process.exit(1);
}

console.log(`Powers of 2 less than or equal to 2^${n}:`);

let power = 1;
for (let i = 0; i <= n; i++) {
  power *= 2;
}
