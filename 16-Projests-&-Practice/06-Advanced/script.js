const btnEl = document.querySelector(".btn");

const clickHandler = async () => {
  // fetch("https://reqres.in/api/users")
  //   .then((res) => {
  //     if (!res.ok) {
  //       console.log("problem");
  //       return;
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log(data.data[3].first_name);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // async await

  try {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();

    if (!res.ok) {
      console.log(data.description);
    }

    console.log(data.data[3].first_name);
  } catch (err) {
    console.log(err);
  }
};

btnEl.addEventListener("click", clickHandler);

console.log(window);
