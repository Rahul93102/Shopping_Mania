import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [Selected, setSelected] = useState(null);
  const [EnableMultiselected, setEnableMultiselected] = useState(false);
  const [Multiselected, setMultiselected] = useState([]);

  function isSelected(getcurrentId) {
    setSelected(Selected === getcurrentId ? null : getcurrentId);
  }

  function MutliSelection(getcurrentId) {
    const Multi = [...Multiselected];
    const idx = Multi.indexOf(getcurrentId);

    if (idx === -1) {
      Multi.push(getcurrentId);
    } else {
      Multi.splice(idx, 1); // just remove from id to 1th elem
    }
    setMultiselected(Multi);
  }

  return (
    <div>
      <div className="container">
        <div className="buttons">
          <button onClick={() => setEnableMultiselected(!EnableMultiselected)}>
            {EnableMultiselected ? "Agree" : "Disable"}
          </button>
        </div>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="main-check" key={dataItem.id}>
                <div
                  className="sub-main"
                  onClick={
                    EnableMultiselected
                      ? () => MutliSelection(dataItem.id)
                      : () => isSelected(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                </div>

                {EnableMultiselected
                  ? Multiselected.indexOf(dataItem.id) !== -1 && (
                      <div>
                        <h3>{dataItem.answer}</h3>
                      </div>
                    )
                  : Selected === dataItem.id && (
                      <div>
                        <h3>{dataItem.answer}</h3>
                      </div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
