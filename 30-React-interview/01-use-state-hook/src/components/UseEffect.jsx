import { useEffect, useLayoutEffect, useState } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState({});

  //   useEffect(() => {
  //     return () => {};
  //   }, []);

  //   const [seconds, setSeconds] = useState(0);

  const fetchUser = async () => {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();

    setUsers(data);

    console.log(data);
  };

  useEffect(() => {
    console.log("effect asynchronous");

    fetchUser();
  }, []);

  useLayoutEffect(() => {
    console.log("layout effect synchronous");
  }, []);

  return (
    <div>
      UseEffect
      <p>{users.first_name}</p>
      <p>{users.last_name}</p>
      <p>{users.email}</p>
    </div>
  );
};

export default UseEffect;
