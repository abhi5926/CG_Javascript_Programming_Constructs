// Method to flip coin
function flipCoin() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails'; 
}

// Function to simulate game 11 times
function flipCoinUntilWinner() {
    let headsCount = 0;
    let tailsCount = 0;

    while (headsCount < 11 && tailsCount < 11) {
        let result = flipCoin(); 
        
        if (result === 'Heads') {
            headsCount++;
        } else {
            tailsCount++;
        }
        
        console.log(`Heads: ${headsCount}, Tails: ${tailsCount}`);
    }
    
    // Declare the winner
    if (headsCount === 11) {
        console.log("Heads wins with 11 wins!");
    } else if (tailsCount === 11) {
        console.log("Tails wins with 11 wins!");
    }
}

// Call the function to start the game
flipCoinUntilWinner();
