# Switches

If you find yourself with a lot of else-if statements and you are testing a single value, you may want to consider using a switch statement. The switch evaluates an expression and then executes the first case that matches the value.

The format for a switch statement is as follows:

```js
switch (expression) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  default:
    statement3;
}
```

We pass in an expression to evaluate and then we use the case keyword to define a value to match against the expression. We then use the break keyword to exit the switch statement. The default will run if there is are no cases that match.

Let's say that we just want to log a message if the month is January, February, or March.

```js
const d = new Date(2022, 1, 20, 8, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not January, February or March');
}
```

Switches are best for immediate values. When using ranges, they are slower than `else-if`. To use a switch with ranges, we can do this.

```JavaScript
const hour = d.getHours();

switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}
```
