// Function to generate the birth months of 50 individuals
function generateBirthMonths() {
    let birthMonths = {};

    // Generate random birth months for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; 
        if (birthMonths[month]) {
            birthMonths[month].push(i);
        } else {
            birthMonths[month] = [i];
        }
    }

    return birthMonths;
}

// Function to print the individuals born in the same month
function printBirthMonthGroups(birthMonths) {
    for (let month in birthMonths) {
        console.log(`Month ${month}: Individuals [${birthMonths[month].join(', ')}]`);
    }
}

// Generate birth months Method calling
let birthMonths = generateBirthMonths();

// Mehod calling
printBirthMonthGroups(birthMonths);
