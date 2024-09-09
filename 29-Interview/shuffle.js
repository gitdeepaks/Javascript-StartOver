const shuffleItms = (itm) => {
  return itm.map((item) =>
    ({ sort: Math.random(), value: item }
      .sort((item1, item2) => item1.sort - item2.sort)
      .map((a) => a.value))
  );
};

shuffleItms([1, 2]);
