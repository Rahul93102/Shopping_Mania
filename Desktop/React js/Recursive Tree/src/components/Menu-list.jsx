import React from "react";
import MenuItems from "./ Menu-items";

const Menulist = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length > 0
        ? list.map((item) => <MenuItems key={item.label} item={item} />)
        : null}
    </ul>
  );
};

export default Menulist;
