import React from "react";
import Menulist from "./Menu-list";
import { Menus } from "./data"; // Import Menus correctly

const Menu = () => {
  return (
    <div className="Tree-Container">
      <Menulist list={Menus} />
    </div>
  );
};

export default Menu;
