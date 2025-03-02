const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let low = 1;
let high = 100;
let magicNumber = -1;

console.log("Think of a number between 1 and 100.");

function guessNumber() {
  if (low > high) {
    console.log("Something went wrong. Let's start over.");
    low = 1;
    high = 100;
    guessNumber();
    return;
  }
  
  let mid = Math.floor((low + high) / 2);
  
  rl.question(`Is your number less than or equal to ${mid}? (yes/no) `, (answer) => {
    if (answer.toLowerCase() === 'yes') {
      high = mid;
    } else {
      low = mid + 1;
    }
    
    if (low === high) {
      magicNumber = low;
      console.log(`Your magic number is: ${magicNumber}`);
      rl.close();
    } else {
      guessNumber();
    }
  });
}

guessNumber();
