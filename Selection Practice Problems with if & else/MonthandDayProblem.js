// Taking month and day from command Line  
const day = parseInt(process.argv[8]);
const month = parseInt(process.argv[9]);

// Checking using if else Statement
if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
    console.log(true);
} else {
    console.log(false);
}
