# Private Fields In ES2022

Up until recently, JavaScript did not have a way to create private entities in classes. We used the underscore convention for a long time. However, in ES2022, we now have a way to create private class fields by using the `#` symbol. This is a new feature that isn't yet supported in all browsers. Right now, in the beginning of 2023, you'll probably run into the underscore convention more often than the `#` symbol. But this seems to be the future of private fields in JavaScript.

Let's use our `Wallet` example from the last video and go through and see what we need to change.

First, there is now a concept of `fields` and `properties`. A `field` is a variable that is declared inside of a class. A `property` is a variable that is declared inside of an object. So, in the last video, we had a `balance` property and a `transactions` property. Now, we're going to have a `#balance` field and a `#transactions` field defined directly in the class as opposed to in the constructor.

```js
class Wallet {
  #balance = 0;
  #transactions = [];
}
```

The getters will remain the same. We'll just need to change the `balance` property to `#balance` and the `transactions` property to `#transactions`.

```js
class Wallet {
  #balance = 0;
  #transactions = [];

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }
}
```

The `deposit` and `withdraw` methods will also remain the same. We'll just need to change the `balance` property to `#balance` and the `transactions` property to `#transactions`. We will also make the process methods private by adding the `#` symbol to the beginning of the method name.

```js
class Wallet {
  #balance = 0;
  #transactions = [];

  get balance() {
    return this.#balance;
  }

  get transactions() {
    return this.#transactions;
  }

  deposit(amount) {
    this.#processDeposit(amount);
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#processWithdraw(amount);
    if (amount > this.#balance) {
      console.log(`No enough funds`);
      return;
    }
    this.#balance -= amount;
  }

  #processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this.#transactions.push({
      type: 'deposit',
      amount,
    });
  }

  #processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this.#transactions.push({
      type: 'withdraw',
      amount,
    });
  }
}
```

Now, we can create a new instance of the `Wallet` class and call the `deposit` and `withdraw` methods and then show the balance and transactions using the getters.

```js
const myWallet = new Wallet();
myWallet.deposit(300);
myWallet.withdraw(50);
console.log(myWallet.balance); // 250
console.log(myWallet.transactions); // [ { type: 'deposit', amount: 300 }, { type: 'withdraw', amount: 50 } ]
```

Now, lets try and access the `#balance` and `#transactions` fields directly. We'll get an error because they are private fields.

```js
console.log(myWallet.#balance); // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
console.log(myWallet.#transactions); // Uncaught SyntaxError: Private field '#transactions' must be declared in an enclosing class
```

Let's try to be criminals and directly change our balance to $1,000,0000.

```js
myWallet.#balance = 1000000;
console.log(myWallet.balance); // Uncaught SyntaxError: Private field '#balance' must be declared in an enclosing class
```

What if we try and just do `myWallet.balance = 1000000`? This will work because we're not directly changing the `#balance` field.

```js
myWallet.balance = 1000000;
console.log(myWallet.balance); // 250
```

Let's try and call the `#processDeposit` method directly. We'll get an error because it is a private method. Same with `#processWithdraw`

```js
myWallet.#processDeposit(100); // Uncaught SyntaxError: Private field '#processDeposit' must be declared in an enclosing class
```

So, you see, we now have full encapsulation and real private fields and methods in JavaScript. This is a huge step forward for JavaScript.
