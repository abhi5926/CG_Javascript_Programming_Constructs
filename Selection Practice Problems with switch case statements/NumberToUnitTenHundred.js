// Creating Method to convert Number to Word using Switch case
function numberToDisplay(number){
    switch(number){
            case 1:
                console.log("Unit");
                break;
            case 10:
                console.log("ten");
                break;
            case 100:
                console.log("Hundred");
                break;
            case 1000:
                console.log("One Thousand");
                break;
            case 100000:
                console.log("Ten Thousand");
                break;
            case 100000:
                console.log("One Lakh");
                break;
            case 1000000:
                console.log("Ten Lakh");
                break;
            default:
                console.log("invalid number!");
    }
}
// Taking Number as input
let number = 1000;

// calling method
 numberToDisplay(number);