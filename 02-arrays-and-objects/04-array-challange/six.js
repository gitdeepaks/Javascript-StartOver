const muNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const neNums = muNums.filter((num) => {
  return num <= 5;
});

// const newNums = [];

// muNums.forEach((num) => {
//   if (num >= 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);
const books = [
  {
    title: "Book 1",
    genere: "Fiction",
    publish: 1986,
    edition: 2001,
  },
  {
    title: "Book 2",
    genere: "History",
    publish: 1987,
    edition: 2005,
  },
  {
    title: "Book 3",
    genere: "Trans",
    publish: 1988,
    edition: 2004,
  },
  {
    title: "Book 4",
    genere: "History",
    publish: 1986,
    edition: 2010,
  },
  {
    title: "Book 5",
    genere: "Fiction",
    publish: 1986,
    edition: 2007,
  },
];

// const userBooks = books.filter((bk) => bk.genere === "History");
const userBooks = books.filter((bk) => {
  return bk.publish >= 1986 && bk.genere === "History";
});

console.log(userBooks);
