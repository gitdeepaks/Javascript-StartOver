// const coding = ["js", "ts", "rb", "java", "rust", "python"];

// const values = coding.forEach((item) => {
//   //   console.log(item);
//   return;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Historical Fiction",
    publishYear: 1960,
  },
  { title: "1984", genre: "Dystopian", publishYear: 1949 },
  { title: "The Great Gatsby", genre: "Classic Fiction", publishYear: 1925 },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishYear: 1997,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age Fiction",
    publishYear: 1951,
  },
  { title: "Pride and Prejudice", genre: "Romance", publishYear: 1813 },
  { title: "The Hobbit", genre: "Fantasy", publishYear: 1937 },
  { title: "Moby Dick", genre: "Adventure Fiction", publishYear: 1851 },
  { title: "The Lord of the Rings", genre: "Fantasy", publishYear: 1954 },
  { title: "The Alchemist", genre: "Philosophical Fiction", publishYear: 1988 },
];

let userBooks = books.filter((book) => book.genre === "Fantasy");

userBooks = books.filter((book) => {
  return book.publishYear >= 1980 && book.genre === "Fantasy";
});

console.log(userBooks);
