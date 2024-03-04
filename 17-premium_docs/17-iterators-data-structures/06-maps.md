# Maps

Maps are another data structure that we can use in JavaScript. Maps were introduced in ES6. They are similar to objects, but the keys can be ANY type, not just strings. You can even have an object or an array for a key. Maps are iterable, so we can loop through them as well.

## The Map Object

The Map object is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

```js
const map = new Map();
```

We can add data to a map using the `set` method.

```js
map.set('name', 'John');
map.set(1, 'Number One');
```

We can get data from a map using the `get` method.

```js
map.get('name'); // John
map.get(1); // Number One
```

We can also use the `size` property to get the number of items in the map.

```js
map.size; // 2
```

We can also use the `has` method to check if a key exists in the map.

```js
map.has('name'); // true
map.has('age'); // false
```

We can also use the `delete` method to remove a key-value pair from the map.

```js
map.delete('name');
map.size; // 1
```

We can also use the `clear` method to remove all key-value pairs from the map.

```js
map.clear();
map.size; // 0
```

We can also use the `forEach` method to loop through the map. Let's create a new map and add some data to it.

```js
const peopleMap = new Map();
map.set('Brad', { phone: '555-555-5555', email: 'brad@gmail.com' });
map.set('John', { phone: '555-555-5555', email: 'john@gmail.com' });
map.set('Jill', { phone: '555-555-5555', email: 'jill@gmail.com' });
```

Now we can loop through the map using the `forEach` method.

```js
peopleMap.forEach((person) => {
  console.log(person.email);
});
```

We can also get the `keys`, `values` and `entries` from the map. These 3 methods return an iterator, so this should make sense if you watched the videos on iterators.

```js
peopleMap.keys(); // MapIterator {"Brad", "John", "Jill"}
peopleMap.values(); // MapIterator {{…}, {…}, {…}}
peopleMap.entries(); // MapIterator {"Brad" => {…}, "John" => {…}, "Jill" => {…}}
```

Let's use the `next()` method to get the first value from the `keys` iterator.

```js
const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

To convert a map to an array, we can use the `Array.from` method.

```js
const peopleArray = Array.from(peopleMap);
```

To convert to an array of values, we can use the `Array.from` method and pass in the `values` method.

```js
const peopleArray = Array.from(peopleMap.values());
```

To convert to an array of keys, we can use the `Array.from` method and pass in the `keys` method.

```js
const peopleArray = Array.from(peopleMap.keys());
```
