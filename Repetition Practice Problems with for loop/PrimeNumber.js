// Method creating to check weather number is prime or not prime
function isPrime(number){
    if(number <= 1){
       console.log("Number is not prime!");
    }

  let count = 1;
  // running loop to check number is prime or not
  for(let i=2;i<=number;i++){
    if(number %i === 0){
        count++;
    }
  }

  if(count > 2){
    console.log("Number is prime!");
  }else{
    console.log("Number is not prime");
  }
}
// taking Number
let number = 24;

// Method calling 
isPrime(number);