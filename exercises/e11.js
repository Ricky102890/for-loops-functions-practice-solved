// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  let totals = [];
  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    let withdrawals = obj.withdrawals;
    if (withdrawals) {
      for (let x = 0; i < withdrawals.length; x++) {
        let totalWithdrawals = 0;
        totalWithdrawals += withdrawals[x];
        if (totalWithdrawals > 0) {
          totals.push(totalWithdrawals);
        }
  
      }
    }
    else {
      totals.push(0);
    }
  }
  return totals;
}
    
    

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
