# map() Method

The `map()` creates a new array populated with the results of calling a provided function on every element in the array.

Let's look at a simple example where we have an array, and we want to create a new array with each number multiplied by 2.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

Since the `map()` method returns a new array, we can assign the result to a variable and use it later.

## Using forEach()

Let's do the same thing using the `forEach()` method.

```js
const doubledNumbers2 = [];

numbers.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

console.log(doubledNumbers2); // [2, 4, 6, 8, 10]
```

You can see `map()` is cleaner and more concise than `forEach()`.

## Using map() with an array of objects

We can use `map()` to transform an array of objects.

```js
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
```

Let's create an array of company names:

```js
const companyNames = companies.map((company) => company.name);

console.log(companyNames);
// ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']
```

Let's create an array of new objects with just the name and category properties:

```js
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
}
```

Let's create an array of objects with the name and the length of each company in years:

```js
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});
```

## Chaining map Methods

We can chain methods together to create a more complex result.

```js
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((number) => number * 2);

console.log(squareAndDouble);
// [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]
```

If the shorthand syntax is confusing you, this is the same as:

```js
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (number) {
    return number * 2;
  });

console.log(squareAndDouble2);
// [2, 2.8284271247461903, 3.4641016151377544, 4, 4.47213595499958]
```


## Chaining With Other Methods

We can chain different methods together to create more complex functionality. Let's say that we want to filter the even numbers and then double them, we can chain `map()` and `filter()` together:

```js
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble); // [4, 8, 12, 16, 20]
```