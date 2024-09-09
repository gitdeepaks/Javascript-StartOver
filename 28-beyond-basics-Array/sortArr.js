// const arr = [3, 2, 14, 4];

// const res = arr.sort((a, b) => b - a);

// console.log(arr, res);

const books = [
  { name: "zony Pong", auther: "JK Rowlink" },
  {
    name: "kockey",
    auther: "Dhyan Chnad",
  },
  { name: "llunter", auther: "Suzi Roshan" },
];

books.sort((book1, book2) => {
  const autherLastName1 = book1.auther.split("")[1];
  const autherLastName2 = book2.auther.split("")[1];
  return autherLastName1 < autherLastName2 ? -1 : 1;
});

console.log(books);
