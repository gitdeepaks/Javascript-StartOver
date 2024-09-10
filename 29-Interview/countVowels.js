const findVBow = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }

  return counter;
};

findVBow("aeiou");
