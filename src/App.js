import "./App.css";

import React, { useState } from "react";
import click from "./music/Click_sound.wav";
import start from "./music/whistle.mp3";

let clickSound = new Audio(click);
let startSound = new Audio(start);

function App() {
  const [number, setNumber] = useState(0);
  const [arrow, setArrow] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [arrowColor, setArrowColor] = useState("black");

  function startInterval() {
    startSound.play();
    const newIntervalId = setInterval(() => {
      // Generate a random number between 1 and 100
      clickSound.play();
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      setNumber(randomNumber);

      // Generate a random arrow direction
      const arrowDirections = [
        <span class="material-symbols-outlined">arrow_back</span>,
        <span class="material-symbols-outlined">arrow_forward</span>,
      ];
      const randomIndex = Math.floor(Math.random() * arrowDirections.length);
      setArrow(arrowDirections[randomIndex]);
      // Generate a random arrow colors
      const colors = ["red", "green", "white", "yellow"];
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      setArrowColor(colors[randomColorIndex]);
    }, 2000);
    setIntervalId(newIntervalId);
  }

  function stopInterval() {
    clearInterval(intervalId);
    setNumber(0);
    setIntervalId(null);
  }

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={startInterval}>Start</button>
        <button onClick={stopInterval}>Stop</button>
      </div>
      <div className="scoreBoard">
        <h4 className="number">{number}</h4>{" "}
      </div>
      <div className="orients">
        <div className="orient" style={{ color: arrowColor }}>
          {arrow}
        </div>
        <div className="orient" style={{ color: arrowColor }}>
          {arrow}
        </div>
      </div>
    </div>
  );
}

export default App;
