const set = new Set([1, 2, 2, 3, 3, 4, 4, 5, 5]);

set.add(5);

// set.has(4);
console.log(set.has(4));
console.log(set.has(6));
console.log(set);

console.log(set.delete(4));

const setArray = Array.from(set);
console.log(setArray);

for (const item of set) {
  console.log(item);
}

const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

set.clear();

console.log(set);
