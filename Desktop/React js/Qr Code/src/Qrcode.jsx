import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";
//npm install react-qr-code

const Qrcode = () => {
  const [qr, setQr] = useState("");
  const [value, setValue] = useState("");

  function handleQr() {
    setQr(value);
    setValue("");
  }

  return (
    <div className="qr-code-container">
      <div className="input-container">
        <input
          type="text"
          value={value}
          name="qr-code"
          placeholder="Enter your Message"
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={!value.trim()} onClick={handleQr}>
          Generate
        </button>
      </div>
      {qr && (
        <div className="qr-code-display">
          <QRCode id="qr-code-value" value={qr} size={200} bgColor="#fff" />
        </div>
      )}
    </div>
  );
};

export default Qrcode;
