import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Menulist from "./Menu-list";
import "./Main.css";
const Menuitems = ({ item }) => {
  const [currentDisplay, setcurrentDisplay] = useState({});

  function toggleprevState(currentlabel) {
    setcurrentDisplay({
      ...currentDisplay,
      [currentlabel]: !currentDisplay[currentlabel],
    });
  }

  return (
    <li>
      <div className="menu-items">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 ? (
          <span onClick={() => toggleprevState(item.label)}>
            {currentDisplay[item.label] ? (
              <FaMinus color="#000000" size={25} />
            ) : (
              <FaPlus color="#000000" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      currentDisplay[item.label] ? (
        <Menulist key={item.label} list={item.children} />
      ) : null}
    </li>
  );
};

export default Menuitems;
