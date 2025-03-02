
// Creating Method to find second largest and second smallest element in array
function generateRandomNumber(){
    // Creating array
    let numbers = [];
    for(let i=0;i<10;i++){
        let randomNumber = Math.floor(Math.random()*900)+100;
        // Adding element in array 
        numbers.push(randomNumber);
    }
    return numbers;
}

// Method for find smallest and second smallest element in array
function findSecondLargestAndSmallest(numbers){
   // Sorting array
   numbers.sort();
   let n = numbers.length;
   
   // Display the details 
   console.log("The Random Numbers is :"+numbers);
   console.log("The Second Smallest element is :"+numbers[1]);
   console.log("The second largest element is :"+numbers[n-2]);

}

// Method calling 
let randomNumber = generateRandomNumber();

// calling Method
findSecondLargestAndSmallest(randomNumber);