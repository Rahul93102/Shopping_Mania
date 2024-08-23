import React, { useState } from "react";
import useLocalStorage from "./assets/Components/useLocalStorage";

const App = () => {
  const [theme, settheme] = useLocalStorage("theme", "dark");

  function toggletheme() {
    settheme(theme == "dark" ? "light" : "dark");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={toggletheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default App;
