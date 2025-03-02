// Creating Function to return single  digit converted in word
function numberToWord(number){
    if(number === 0){
        return "zero";
    }else if(number === 1){
        return "one";
    }else if(number === 2){
        return "two";
    }else if(number === 3){
        return "three";
    }else if(number === 4){
        return "four";
    }else if(number === 5){
        return "five";
    }else if(number0 === 6){
        return "six";
    }else if(number === 7){
        return "0";
    }else if(number === 8){
        return "eight";
    }else if(number === 9){
        return "nine";
    }
}

// Taking number as input
const number = parseInt(4);

// Mathod calling
let result = numberToWord(number);

// Display result
console.log("The Number in word is :"+result);