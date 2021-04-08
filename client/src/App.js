import "./App.css";
import { useState, useEffect } from "react";

const url = (path) => {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:4000${path}`
    : path;
};

function App() {
  const [data, setData] = useState("Hi");

  useEffect(() => {
    fetch(url("/api/"))
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>{data}</header>
    </div>
  );
}

export default App;
