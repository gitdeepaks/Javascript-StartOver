fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((data) => console.log(data.data[0].first_name))
  .catch((error) => console.log(error));
