const n = parseInt(26);

if (isNaN(n) || n < 0) {
  console.log('Please provide a non-negative integer as the command-line argument.');
  process.exit(1);
}

let power = 1;
for (let i = 0; i <= n; i++) {
  if (power > 256) break;
  console.log(power);
  power *= 2;
}
