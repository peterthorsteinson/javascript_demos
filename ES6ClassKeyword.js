// ES6ClassKeyword.js
// Use transpiler (Traceur or Babel)

/*
ES6 introduced new OOP keywords (class, constructor, static, extends, and super).
These keywords look like other class-based languages (C++, C#, Java), but they are different.
JavaScript still uses a prototype-based mechanism.
*/

"use strict";

class BankAccount {
  constructor(account, balance) {
    this.account = account;
    this.balance = balance;
  }
}

class CreditAccount extends BankAccount {
  constructor(account, balance, creditLimit) {
    super(account, balance);
    this.creditLimit = creditLimit;
  }
  get availableFunds() {
    return this.balance + this.creditLimit;
  }
}

var creditAccount = new CreditAccount("1234567890", 100000, 500000);
console.log(creditAccount.availableFunds); // 600000