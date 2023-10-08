const btnEl = document.querySelector(".btn");

const clickHandler = () => {
  fetch("https://reqres.in/api/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data[3].first_name);
    })
    .catch((err) => {
      console.log(err);
    });
};

btnEl.addEventListener("click", clickHandler);
