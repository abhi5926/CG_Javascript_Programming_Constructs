function getRandomNumber(){
    return Math.floor(Math.random()*90)+10;
}

// Creating Array 
let numbers = [];

// running loop five times to add five different values
for(let i=0;i<5;i++){
    numbers.push(getRandomNumber());
}

let sum =0;
// Calculating the sum of Five Digits Numbers
for(let i=0;i<numbers.length;i++){
   sum += numbers[i];
}
// Display the Sum of Five Digits Numbers
console.log("The sum of Five Two Digits Numbers :"+sum);

// Calculating average 
let average = sum / numbers.length;
// Display the Average of Five Digits Numbers
console.log("The Average of Five Two Digits Numbers :"+average);
