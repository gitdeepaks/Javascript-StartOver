fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    if (!res.ok) {
      console.log("problem");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data[0].title);
  })
  .catch((err) => {
    console.log(err);
  });
