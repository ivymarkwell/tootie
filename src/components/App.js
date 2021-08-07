import React from "react";
import "../App.css";
import { Image } from "react-bootstrap";
import tootie from "../images/tootie.png";

function App() {
  return (
    <div className="app flex-column">
      <Image src={tootie} />
      <p>Tootie is learning to code through the file structure of an app!</p>
    </div>
  );
}

export default App;
