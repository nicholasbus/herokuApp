import "./App.css";
import { useSTate, useEffect } from "react";

const url = (path) => {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:4000${path}`
    : path;
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>React apps are cool</header>
    </div>
  );
}

export default App;
