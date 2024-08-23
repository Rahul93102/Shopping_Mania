import React from "react";
import Menu from "./components/Menu";
import { Menus } from "./components/data"; // Ensure Menus is exported correctly

const App = () => {
  return (
    <div>
      <Menu Menu={Menus} />
    </div>
  );
};

export default App;
