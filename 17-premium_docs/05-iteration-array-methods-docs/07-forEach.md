# forEach

### High Order Array Methods

Now we are goinf to get into `high order array methods`, which are methods that we can use on arrays that take another function as an argument. These functions that we pass in are called `callback functions`. The callback will run once for every element in the array. This gives us access to each element.

If we create an array and then look at the `prototype chain`, we can see all of the available methods

```JavaScript
const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'];

console.log(socials.__proto__);
```

### forEach Method

The forEach method is simply a method to loop through an array. It does not return anything, we can just loop through and do whatever we want on each iteration. Let's log all of the social network names.

```JavaScript
socials.forEach(function(item) {
	console.log(item);
});
```

We learned how to use the browser debugger when we learned about execution context. Let's use it to see each time the callback is run. Place a breakpoint on the same line as the forEach. Hit `esc` to bring up the console window so you can see the output. Then hit the step through arrow. You will see it execute and log each item one at a time.

<img src="images/debugger-foreach.png" alt="" style="width:600px;"/>

The above function will simply loop through and log the social networks. We don't need to set anything here to be returned, we are just logging each item. The function we pass in will run for every item in the array. The callback function takes in an argument which represents the current item. I called it `item`, but I could have called it anything. I could have called it `social`. It is common to use the singular version of the array name. Then I just logged `item`.

We can use arrow functions to shorten this as well and take away the curly braces, since it is a one liner.

```JavaScript
socials.forEach((item) => console.log(item));
```

In addition to the item passed into the callback, we can also pass in and get access to the current index (stars at 0) and the entire array itself.

```JavaScript
socials.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
```

Let's say we want to also console log something if we are on the last iteration of the loop, or the last element in the array

```JavaScript
socials.forEach((item, index, arr) => {
  if (index === arr.length - 1) {
    console.log('The End');
  }
});
```

You can also use a separate named function as your callback rather than pass in an anonymous one

```JavaScript
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);
```

Of course, we can use `forEach` on an array of objects. In reality, most of your arrays will probably use objects as items.

```JavaScript
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));
```
