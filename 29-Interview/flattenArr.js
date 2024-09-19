function flattenArr(arr) {
  const result = [];
  const stack = [...arr];

  while (stack.length) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}

function flattenArray(arr) {
  let result = []; // Initialize the result array that will hold the flattened elements.

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If the current element is an array, recursively flatten it and concatenate the result
      result = result.concat(flattenArray(arr[i]));
    } else {
      // If it's not an array, simply add the element to the result array
      result.push(arr[i]);
    }
  }
  return result;
}

// Usage Example
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

const nestedArr = [1, [2, [3], [4, [5], [6], 7]]];

const flattenArrNew = flattenArr(nestedArr);
console.log(flattenArrNew);
