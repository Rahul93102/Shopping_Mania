import React, { useState } from "react";
import data from "./data";

const Singleaccordinan = () => {
  const [Selected, setSelected] = useState(null); // a single idx will store thier

  function isSelected(getcurrentId) {
    setSelected(Selected === getcurrentId ? null : getcurrentId); //where logic if already selected then make deselected then else make selecteds
  }
  return (
    <div>
      {data && data.length > 0
        ? data.map((dataItem) => (
            <div className="acc-wrapper" key={dataItem.id}>
              <div className="acc-main" onClick={() => isSelected(dataItem.id)}>
                <h3>{dataItem.question}</h3>
              </div>
              {Selected === dataItem.id ? (
                <div className="answers">
                  <h3>Answers : {dataItem.question}</h3>
                </div>
              ) : null}
            </div>
          ))
        : "No Invalid format"}
    </div>
  );
};

export default Singleaccordinan;
