import { useState } from "react"
import "./index.css";

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div className="app-container" style={{ backgroundColor: color }}>

      <div className="button-container-wrapper">

        <div className="button-container">

          <button
            onClick={() => setColor("red")}
            className="color-button"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="color-button"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="color-button"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="color-button"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>

          <button
            onClick={() => setColor("gray")}
            className="color-button"
            style={{ backgroundColor: "gray" }}
          >
           Gray
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;