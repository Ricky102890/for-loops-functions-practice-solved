
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalanceAccts = [];
  for (let i = 0; i < array.length; i++) {
    let depositAcct = array[i].deposits;
    let withdrawalAcct = array[i].withdrawals;
    let acctBalance = array[i].balance;
    let acctDepositsSum = 0;
    let acctWithdrawalSum = 0;
    let acctDifference;

    if (depositAcct) {
      for (let x = 0; x < depositAcct.length; x++) {
        acctDepositsSum += depositAcct[x];
      }
    }

    if (withdrawalAcct) {
      for (let y = 0; y < withdrawalAcct.length; y++) {
        acctWithdrawalSum += withdrawalAcct[y];
      }
    }
    
    acctDifference = acctDepositsSum - acctWithdrawalSum;
    
    if (acctBalance !== acctDifference) {
      wrongBalanceAccts.push(array[i]);
    }
  }
  return wrongBalanceAccts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
