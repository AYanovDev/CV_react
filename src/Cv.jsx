import { useState } from "react";
import "./Cv.css";

function Cv(props) {
  return (
    <div className="cv_section">
      <h2>This is the CV section</h2>
      <p className="name">{props.data.name}</p>
    </div>
  );
}

export default Cv;
