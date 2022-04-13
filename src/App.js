import { useState } from "react";
import "./App.css";
import Tweet from "./tweet";

function App() {
  const [isRed, change_color] = useState(false);
  const toggle = () => change_color(!isRed);
  return (
    <div>
      <h1 className={isRed ? "red" : ""} onClick={toggle}>
        Toggle My Color Please
      </h1>
      <div className="App">
        <Tweet name="Nadeem" msg="Hello Everyone to React" />
        <Tweet name="John" msg="Winters are coming" />
        <Tweet name="Kareem" msg="Coming to Islamabad" />
        <Tweet name="Azlan" msg="Watching COCO Melon righ now" />
      </div>
    </div>
  );
}

export default App;
