// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[0];
    

    if (array[i] < min) {
      min = array[i];
      return min;
    }
    else if (array[i] > min) {
      array[i + 1];
    }


  }
}

export function findMaxValueInArray(array) {
  for (let i = 0; i < array.length; i++) {
    let pos = 1;
    let max = array[pos];
    if (array[i] > max) {
      max = array[i];
      return max
    }
    else if (array[i] < max) {
      pos++;
    }
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
