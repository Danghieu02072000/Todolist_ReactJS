import "./styles.css";
import { useState } from "react";
import Content from "./Content";
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>Workspace Hieu's</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show
      </button>
      {show && <Content />}
    </div>
  );
}
