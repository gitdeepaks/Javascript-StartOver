# For In Loop

The `for in` loop is used to loop through the properties of an object.

### For In Syntax

```JavaScript
for (let key in object) {
  // do something
}
```

Let's look at the object below. It is a set of key/value pairs for colors.

```JavaScript
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'green',
  color4: 'yellow',
  color5: 'orange',
  color6: 'purple'
};
```

If we want to get a list of all the keys in the object, we can use the for in loop.

```JavaScript
for (let key in colorObj) {
  console.log(key);
}
// color1 color2 color3 color4 color5 color6
```

If we want to get the values, we can simply use the key like so:

```JavaScript
for (let key in colorObj) {
  console.log(colorObj[key]);
}
// red blue green yellow orange purple
```

### Using For In With Arrays

There are a few ways to loop through arrays. We could use a regular for or while loop as well as an array method called `forEach()`, which I will go over soon, but we can also use a `for in` loop.

```JavaScript
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

for (let key in colors) {
  console.log(colors[key]);
}

// red blue green yellow orange purple
```
