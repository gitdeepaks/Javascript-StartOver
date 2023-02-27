// try {
//   console.log(x)

// } catch (err) {
//   console.log('Error: ' + err)
// }

function duoble(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * 2
}


try {
  const y = duoble('hello world');
  console.log(y)
} catch (error) {
  console.log(error)
}