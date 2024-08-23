import React, { useRef, useState } from "react";
import useOutsideClick from "./Index";

const Test = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="containr">
      {showContent ? (
        <div ref={ref} className="content-box">
          <p className="content-header">This is random Clicker </p>
          <p className="content-text">
            Please ! Click Outside the main div to close ! Inside div wonn't
            works
          </p>
        </div>
      ) : null}
      <button className="toggle-button" onClick={() => setShowContent(true)}>
        Close it
      </button>
    </div>
  );
};

export default Test;
