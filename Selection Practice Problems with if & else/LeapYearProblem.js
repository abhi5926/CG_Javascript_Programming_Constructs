function isLeapYear(year) {
    // Checking if the year is a four-digit number
    if (year >= 1000 && year <= 9999) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            console.log("Year is Leap Year");
        } else {
            console.log("Year is Not Leap Year");
        }
    } else {
        console.log("Please Enter Valid 4 digit year");
    }
}

// Taking Year as input 
const year = parseInt(2004);

// Method calling
isLeapYear(year);
