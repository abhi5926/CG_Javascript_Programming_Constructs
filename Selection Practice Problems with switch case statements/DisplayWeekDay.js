// Creating Method to convert Number to Word using Switch case
function numberToWeekDay(dayNumber){
    switch(dayNumber){
            case 1:
                console.log("Sunday");
                break;
            case 2:
                console.log("Monday");
                break;
            case 3:
                console.log("Tuesday");
                break;
            case 4:
                console.log("Wednesday");
                break;
            case 5:
                console.log("Thursday");
                break;
            case 6:
                console.log("Friday");
                break;
            case 7:
                console.log("Saturday");
                break;
            default:
                console.log("invalid number!");
    }
}

// taking day number as input
let dayNumber = 5;

// calling method
 numberToWeekDay(dayNumber);