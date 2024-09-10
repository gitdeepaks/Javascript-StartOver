const isAna = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const isLower1 = str1.toLowerCase();
  const isLower2 = str2.toLowerCase();

  if (isLower1 === isLower2) {
    return false;
  }

  const sortedStr1 = isLower1.split("").sort().join();
  const sortedStr2 = isLower2.split("").sort().join();

  return sortedStr1 === sortedStr2;
};

isAna("foo", "oof");
