// Method creating to check weather number is prime or not prime
function isPrime(number){
    if(number <= 1){
      return  false;
    }

  let count = 1;
  // running loop to check number is prime or not
  for(let i=2;i<=number;i++){
    if(number %i === 0){
        count++;
    }
    if(count > 2){
        return true;
      }
  }
  return false;
}

function printPrimesInRange(start, end){
    if (start > end) {
        console.log("Invalid range.");
        return;
    }
    // Display prime numbers
    console.log("The following prime numbers");

    for(let i=start;i<=end;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

// taking Number
let number = 24;

// Method calling 
isPrime(number);

// taking start and end
const start = 10; 
const end = 50;  

// method calling
printPrimesInRange(start, end);