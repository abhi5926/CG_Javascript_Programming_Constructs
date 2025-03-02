// Function to generate 3 random three digits numbers
function getThreeDigitNumber(){
    let number = Math.floor(Math.random()*900)+100;
    return number;
} 

// creating array to Store these values
let numbers = [];
for(let i=0;i<5;i++){
    numbers.push(getThreeDigitNumber());
}

// Finding minimum and maximum value using if else
let min = numbers[0];
let max = numbers[0];

// Running loop to find min and max numbers 
for(let i=1;i<numbers.length;i++){
if(numbers[i]<min){
    min = numbers[i];
}
if(numbers[i] > max){
    max = numbers[i];
}
}

// Display Details
console.log("The Five Random Numbers is :"+numbers);
console.log("The minimum Number is :"+min);
console.log("The Maximum Number is :"+max);