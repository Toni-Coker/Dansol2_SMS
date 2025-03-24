import React from "react";
import "./ENotes.css";

// Links for E-Notes
const eNotesLinks = {
  JSS1: "https://bit.ly/jss1enote",
  JSS2: "https://bit.ly/jss2enote",
  JSS3: "https://bit.ly/jss3enote",
  SS1: "https://bit.ly/ss1enote",
  SS2: "https://bit.ly/ss2enote",
};

const ENotes = () => {
  return (
    <div className="enotes-container">
      <h1>E-Notes</h1>
      <div className="enotes-grid">
        {Object.keys(eNotesLinks).map((className) => (
          <div key={className} className="enotes-card" onClick={() => window.open(eNotesLinks[className], "_blank")}>
            <h3>{className}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ENotes;
