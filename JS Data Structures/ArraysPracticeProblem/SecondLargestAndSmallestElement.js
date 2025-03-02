// Method to generate 3 digit 10 random numbers
function generateRandomNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 900) + 100;
        // Adding numbers in array
        numbers.push(randomNumber);
    }

    return numbers;
}

// Method to find second smallest and largest element in array
function findSecondLargestAndSmallest(numbers){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] < largest) {
            secondLargest = numbers[i];
        }

        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secondSmallest && numbers[i] > smallest) {
            secondSmallest = numbers[i];
        }
}

// Display Details
console.log("The Random Numbers :"+numbers);
console.log("The Second Largest Number :"+secondLargest);
console.log("The Second Smallest Number"+secondSmallest);
}

// Method calling
let randomNumbers = generateRandomNumbers();

// Method calling
findSecondLargestAndSmallest(randomNumbers);
