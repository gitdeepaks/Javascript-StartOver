import { useState } from "react";

const UseState = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   console.log(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userData);
        }}
      >
        ;
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseState;
