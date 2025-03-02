// Function to perform temperature conversion
function convertTemperature() {
    let temperature = 28;
    let conversionChoice ='C';

  
    if (temperature < 0 || temperature > 100) {
        alert("Please enter a temperature within the freezing (0 °C / 32 °F) and boiling (100 °C / 212 °F) points of water.");
        return;
    }

    // Perform conversion based on user choice using a switch statement
    let result;
    switch (conversionChoice.toUpperCase()) {
        case 'C':
            // Celsius to Fahrenheit conversion
            result = (temperature * 9/5) + 32;
            console.log(`${temperature}°C is equal to ${result.toFixed(2)}°F`);
            break;

        case 'F':
            // Fahrenheit to Celsius conversion
            result = (temperature - 32) * 5/9;
            console.log(`${temperature}°F is equal to ${result.toFixed(2)}°C`);
            break;

        default:
            console.log("Invalid selection.");
            break;
    }
}

// Calling Method
convertTemperature();
