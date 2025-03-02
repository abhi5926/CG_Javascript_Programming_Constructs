// Function to simulate the gambler's betting game
function gamblerGame() {
    let money = 100; 
    let betAmount = 1; 
    let goal = 200; 
    let numberOfBets = 0; 
    let numberOfWins = 0; 
    
    // Loop until the gambler reaches the goal or goes broke
    while (money > 0 && money < goal) {
        
        let result = Math.random() < 0.5 ? 'win' : 'lose';
        
        if (result === 'win') {
            money += betAmount; 
            numberOfWins++;
        } else {
            money -= betAmount; 
        }
        
        numberOfBets++; 
    }
    
    // Output the result of the game
    if (money >= goal) {
        console.log(`The gambler reached the goal of Rs 200!`);
    } else {
        console.log(`The gambler went broke.`);
    }
    
    console.log(`Total number of bets made: ${numberOfBets}`);
    console.log(`Total number of wins: ${numberOfWins}`);
    console.log(`Final amount: Rs ${money}`);
}

// Call the function to simulate the game
gamblerGame();
