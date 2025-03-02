// Creating Method to Conversion
function unitConversion(length){
    // ask user to choose an option
    console.log("Please Choose any one Option that are given following :");
    console.log("1. Feet to Inch");
    console.log("2. Inch to Feet");
    console.log("3. Feet to Meter");
    console.log("4. Meter to Feet");

    let choice = 2;
 
    let result =0;
    // Creating Switch case
    switch (choice) {
        case 1:
            // Feet to Inch
            result = length * 12;
            console.log(length + " Feet = " + result + " Inches");
            break;
        case 2:
            // Inch to Feet
            result = length / 12;
            console.log(length + " Inches = " + result + " Feet");
            break;
        case 3:
            // Feet to Meter
            result = length * 0.3048;
            console.log(length + " Feet = " + result + " Meters");
            break;
        case 4:
            // Meter to Feet
            result = length / 0.3048;
            console.log(length + " Meters = " + result + " Feet");
            break;
    }

}

// taking length as input from user
let length = 124;

// calling Method 
unitConversion(length);