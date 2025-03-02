// Creating Function to read number 
function numberRead(number){
    if(number === 1){
        return "Unit";
    }else if(number === 10){
        return "Ten";
    }else if(number === 100){
        return "Hundred";
    }else if(number === 1000){
        return "Thousand";
    }else if(number === 10000){
        return "Ten Thousand";
    }else if(number === 100000){
        return "One Lakh";
    }
}

// Taking number as input
const number = parseInt(100);

// Mathod calling
let result = numberRead(number);

// Display result
console.log(result);