import React from "react";
import "./Card.css";
import WebcodeDetails from "./WebcodeDetails";

const WebcodeName = () => {
  return (
    <div className="card-container" onClick={WebcodeDetails}>
      <h1 className="card-title">Reka</h1>
      <p className="card-description">
        (B48WD Tamil- First Webcode) Ice and Fire API
      </p>
    </div>
  );
};

export default WebcodeName;
