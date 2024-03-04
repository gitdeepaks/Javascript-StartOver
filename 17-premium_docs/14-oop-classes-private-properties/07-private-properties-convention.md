# Convention For Private Properties

Now we are going to get a bit deeper into encapsulation, which often includes the process of hiding data or hiding specific properties and methods of a class.

In many OOP languages that use classes, you can use specific keywords to indicate which properties and methods are accessible from outside the class. For example, in Java, you can use the `private` keyword to indicate that a property or method is only accessible from within the class. In JavaScript, we don't have those keywords, but there is a convention that is commonly used to indicate that a property or method is private. We use an underscore `_` before the property or method name.

There is also a new feature in ES2022 that allows us to use the `#` symbol to create private fields. This is a new feature that isn't yet supported in all browsers. We'll look at that in the next video. Right now, in the beginning of 2023, you'll probably run into the underscore convention more often than the `#` symbol. There are a few other ways to implement this as well including using `Symbols` and the `WeakMap` object. The underscore convention is definitely the most common at this point in time.

Let's create a new class called `Wallet` and add a constructor that has a `balance` and a `transactions` property. The `balance` will be 0 and `transactions` will be an empty array.

```js
class Wallet {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
}
```

Now let's add a `deposit` method that takes an amount and adds it to the `balance` and adds a new transaction to the `transactions` array. We'll also add a `withdraw` method that takes an amount and subtracts it from the `balance` and adds a new transaction to the `transactions` array.

```js
class Wallet {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
```

Now let's create a new instance of the `Wallet` class and call the `deposit` method with an amount of 300. Then withdraw an amount of 50. Then we'll log the `balance` property to the console.

```js
const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance); // 250
```

It works as expected. However, we don't want to expose the `balance` property to the outside world. We want to make it private. We want to make it so that the only way to access the `balance` property is through the `deposit` and `withdraw` methods. This is part of encapsulation.

Now, like I said, JavaScript does not have a `private` keyword, but we can use the underscore convention to indicate that a property or method is private. So let's add an underscore to the `balance` property.

```js
class Wallet {
  constructor() {
    this._balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log(`No enough funds`);
      return;
    }
    this._balance -= amount;
  }
}
```

This convention tells the developer that the `balance` property is private and should not be accessed directly. We do want to be able to get the balance. We just don't want to be able to set it directly. So let's add a `getBalance` method that returns the `balance` property.

```js
class Wallet {
  constructor() {
    this._balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log(`No enough funds`);
      return;
    }
    this._balance -= amount;
  }

  getBalance() {
    return this._balance;
  }
}
```

Now we can call the `getBalance` method to get the balance. We can't access the `balance` property directly.

```js
const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.getBalance()); // 250
```

## Using a Getter

We could use a function, but I would prefer to use a getter to get the balance. Let's remove the function and add a getter.

```js
class Wallet {
  constructor() {
    this._balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log(`No enough funds`);
      return;
    }
    this._balance -= amount;
  }

  get balance() {
    return this._balance;
  }
}
```

Now, we can access the `balance` through the getter

```js
const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance); // 250
```

The `transactions` property should also be private, so let's add an underscore to that property and create another getter for that. Let's also create 2 new private methods called `_processDeposit` and `_processWithdrawal`. These methods will add a new transaction to the `transactions` array.

```js
class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    this._processWithdraw(amount);
    if (amount > this._balance) {
      console.log(`No enough funds`);
      return;
    }
    this._balance -= amount;
  }

  _processDeposit(amount) {
    console.log(`Depositing ${amount}`);

    this._transactions.push({
      type: 'deposit',
      amount,
    });
  }

  _processWithdraw(amount) {
    console.log(`Withdrawing ${amount}`);

    this._transactions.push({
      type: 'withdraw',
      amount,
    });
  }
}
```

We made the 2 new methods private because there is absolutely no reason for the outside world to call these methods. They are only used internally by the `deposit` and `withdraw` methods. When we create documentation for this interface, we would not include these methods. there is no reason to. Hopefully, encapsulation makes sense to you now.

Now, we can call the `deposit` and `withdraw` methods and we can access the `balance` and `transactions` properties through the getters.

```js
const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance); // 250
console.log(wallet.transactions); // [{type: 'deposit', amount: 300}, {type: 'withdraw', amount: 50}]
```
