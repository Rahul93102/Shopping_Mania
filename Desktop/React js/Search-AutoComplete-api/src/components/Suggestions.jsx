import React from "react";

const Suggestions = ({ data, onClick }) => {
  return (
    <div>
      {data && data.length > 0
        ? data.map((item, index) => (
            <li key={index} onClick={onClick}>
              {item}
            </li>
          ))
        : []}
    </div>
  );
};

export default Suggestions;
