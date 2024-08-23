import { useState } from "react";

const Testtabs = ({ tabsContent, onChange }) => {
  const [currenttabIndex, setCurrenttabIndex] = useState(0);

  function handleonClick(getcurrentIdx) {
    setCurrenttabIndex(getcurrentIdx);
    onChange(getcurrentIdx);
  }

  return (
    <div>
      <div className="container">
        {tabsContent.map((Item, index) => (
          <div
            key={Item.label}
            className={`wrapper ${currenttabIndex === index ? "active" : ""}`}
            onClick={() => handleonClick(index)}
          >
            <span>{Item.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currenttabIndex] && tabsContent[currenttabIndex].tittle}
      </div>
    </div>
  );
};

export default Testtabs;
