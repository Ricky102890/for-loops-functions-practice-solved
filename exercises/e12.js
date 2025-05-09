
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  let largeDeposits = [];
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    let deposits = obj.deposits;
    if (deposits) {
      for (let x = 0; x < deposits.length; x++) {
      let totalDeposits = 0;
      totalDeposits += Number(deposits[x]);
      if (totalDeposits > 100) {
      largeDeposits.push(totalDeposits);
    }
    }
    }
    
    
  }
  return largeDeposits;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
