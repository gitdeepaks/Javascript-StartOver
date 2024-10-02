import { useState } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);

  const [count, setCount] = useState(0);

  const handleSearch = async (e) => {
    e.preventDeafault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/search?q=${query}`
    );
    const data = await response.json();
    setResult(data.items);
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </form>
      <ul>
        {results.map((item) => (
          <img key={item.id}>{item.thumbnailUrl}</img>
        ))}
      </ul>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
