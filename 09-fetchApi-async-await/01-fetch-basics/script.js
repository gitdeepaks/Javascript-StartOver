//Fetching from JSOM file

window
  .fetch("./movies.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//Fetching from text file
window
  .fetch("./test.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
//Fetching from an API

window
  .fetch("https://api.github.com/users/gitdeepaks")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.querySelector("h1").textContent = data.login;
  });
