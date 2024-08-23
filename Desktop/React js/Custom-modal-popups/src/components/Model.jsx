import React, { useState } from "react";
import Modeltest from "./ Model-test";

const Model = () => {
  const [showpopupModal, setShowpopupModal] = useState(false);

  function onClose() {
    onclick(setShowpopupModal(false));
  }

  function toggleshow() {
    setShowpopupModal(!showpopupModal);
  }

  return (
    <div>
      <div className="container">
        <button className="buttons" onClick={toggleshow}>
          Open Up
        </button>
        {showpopupModal && (
          <Modeltest
            id={"custom-models"}
            header={"Header"}
            tittle={"Popup Model just got rendered and Started   ...... "}
            footer={"footer"}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
};

export default Model;
