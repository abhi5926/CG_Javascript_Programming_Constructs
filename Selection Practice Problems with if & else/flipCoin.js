// Method Creating for result Flip Coin
function flipCoin(){
const result = Math.random();

// Condition Checking
if(result < 0.5){
    console.log("Heads");
}else{
    console.log("Tails");
}
}

// Method calling
flipCoin();