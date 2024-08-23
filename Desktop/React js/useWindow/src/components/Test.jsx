import React from "react";
import useWindow from "./useWindow";

const Test = () => {
  const [height, width] = useWindow();

  return (
    <div className="container">
      <h1>Using Custom Hooks</h1>
      <p>Height: {height}px</p>
      <p>Width: {width}px</p>
    </div>
  );
};

export default Test;
