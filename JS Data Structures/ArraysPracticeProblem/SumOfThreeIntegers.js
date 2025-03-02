// Method to find Triplets
function findTriplets(arr) {
    const triplets = [];
  
    for (let i = 0; i < arr.length - 2; i++) {
      for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            triplets.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
  
    return triplets;
  }
  
  const arr = [0, -1, 2, -3, 1, 4, -2];
  const result = findTriplets(arr);
  
  if (result.length > 0) {
    console.log('Triplets that sum to zero:');
    result.forEach((triplet) => console.log(triplet));
  } else {
    console.log('No triplets found that sum to zero.');
  }
  