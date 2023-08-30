fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => console.log(data.data[0].first_name))
  .catch((error) => console.log(error));

// DOM (Intermediate)
const buttonEl = document.querySelector(".btn");

buttonEl.innerHTML = "hi<span>Hello</span>";
