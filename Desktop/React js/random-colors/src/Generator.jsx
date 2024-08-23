import React, { useEffect, useState } from "react";
import "./index.css";

const Generator = () => {
  const [typeofColor, settypeofColor] = useState("Hex");
  const [color, setcolor] = useState(null);

  function randomgen(length) {
    return Math.floor(Math.random() * length);
  }

  function hexcolor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let color = "#";

    for (let i = 0; i < 6; i++) {
      let num = randomgen(hex.length);
      color += hex[num];
    }

    setcolor(color);
  }

  function rgbcolor() {
    const r = randomgen(256);
    const g = randomgen(256);
    const b = randomgen(256);

    setcolor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeofColor === "Hex") hexcolor();
    else rgbcolor();
  }, [typeofColor]);

  return (
    <div className="generator-container" style={{ backgroundColor: color }}>
      <button className="button" onClick={() => settypeofColor("Hex")}>
        Generate Hex
      </button>
      <button className="button" onClick={() => settypeofColor("Rgb")}>
        Generate Rgb
      </button>
      <button
        className="button"
        onClick={typeofColor === "Hex" ? hexcolor : rgbcolor}
      >
        Random Color
      </button>
      <h1 className="color-display">{color}</h1>
      <h1 className="color-display">{typeofColor === "Hex" ? "Hex" : "Rgb"}</h1>
    </div>
  );
};

export default Generator;
