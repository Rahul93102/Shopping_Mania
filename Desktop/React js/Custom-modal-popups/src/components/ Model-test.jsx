const Modeltest = ({ id, tittle, header, footer, onClose }) => {
  return (
    <div>
      <div className="main-container" id={id || "custom-containers"}>
        <div className="sub-container">
          <span className="close-model-icon" onClick={onClose}>
            X
          </span>
          <div className="headers">
            {header && (
              <div>
                <h1>{header}</h1>
              </div>
            )}
          </div>
          <div className="tittles">{tittle && <p>{tittle} </p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Modeltest;
