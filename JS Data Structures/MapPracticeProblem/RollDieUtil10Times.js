// Function to simulate rolling a die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to perform the die rolls 
function rollDieUntil10Times() {
    let rollCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    let maxRoll = 10; 
    let roll = 0;
    
    while (true) {
        roll = rollDie();
        rollCounts[roll] += 1; 
        
        if (rollCounts[roll] === maxRoll) {
            break; 
        }
    }

    // Find the number with the maximum count and the number with the minimum count
    let maxNumber = 1;
    let minNumber = 1;
    for (let number in rollCounts) {
        if (rollCounts[number] > rollCounts[maxNumber]) {
            maxNumber = number;
        }
        if (rollCounts[number] < rollCounts[minNumber]) {
            minNumber = number;
        }
    }

    console.log("Roll results: ", rollCounts);
    console.log("Number that reached maximum times: " + maxNumber + " (" + rollCounts[maxNumber] + " times)");
    console.log("Number that reached minimum times: " + minNumber + " (" + rollCounts[minNumber] + " times)");
}

// calling Method
rollDieUntil10Times();
