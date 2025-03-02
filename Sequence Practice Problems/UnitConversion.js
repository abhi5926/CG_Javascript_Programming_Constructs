// Function to convert inches to feet
function inchesToFeet(inches){
    return inches/12;
}

// Method to convert feet to meters
function feetToMeters(feet){
    return feet * 0.3048;
}

// Calculate the area of 25 plots in acres
function calculateAreaInAcres(lengthInFeet,widthInFeet,numberOfPlots){
    // Area of One Plot In Square Feet
    let areaInSquarefeet = lengthInFeet * widthInFeet;

    // Area in Acres
    let areaInAcres = areaInSquarefeet * numberOfPlots / 43560;

    return areaInAcres;

}

// Converting Inches into feet
let inches = 42;
let feet = inchesToFeet(inches);
console.log("The 42 inches in feet is :"+feet);

// Converting ractangular Plot 69ft * 40ft to meters 
let lengthInFeet = 60;
let widthInFeet = 40;
let lengthInMeters = feetToMeters(lengthInFeet);
let widthInMeters = feetToMeters(widthInFeet);

// Dislay Plot Length
console.log("The Plot Length in Meters is :"+lengthInMeters);
console.log("The Length of The Plot in Feet is :"+widthInMeters);

// Calculate the Area of 25 Plots in Acres
let numberOfPlots = 25;
let areaInAcres = calculateAreaInAcres(lengthInFeet,widthInFeet,numberOfPlots);
console.log("The Area of 25 Plots in  Acres is :"+areaInAcres);