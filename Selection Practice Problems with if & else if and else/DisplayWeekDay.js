// Creating Function to return Day 
function WeekDay(day){
    if(day === 1){
        return "Sunday";
    }else if(day === 2){
        return "Monday";
    }else if(day === 3){
        return "Tuesday";
    }else if(day === 4){
        return "Wednesday";
    }else if(day === 5){
        return "Thursday";
    }else if(day === 6){
        return "Friday";
    }else if(day === 7){
        return "Saturday";
    }else{
       return "Enter valid Day";
    }
}

// Taking number as input
const day = parseInt(2);

// Mathod calling
let result = WeekDay(day);

// Display result
console.log("The Day at a Number is :"+result);