import { useState } from "react";
import "./Cv.css";

function Cv(props) {
  return (
    <div className="cv_section">
      <h1>Personal Details</h1>
      <h2>Name</h2>
      <p className="name">{props.data.name}</p>
      <h2>E-Mail address</h2>
      <p className="email">{props.data.email}</p>
      <h2>Phone Number</h2>
      <p className="phone">{props.data.phone}</p>
      <hr />
      <h1>Educational Experience</h1>
      <div className="educational">
        {props.data.edu?.map((e, index) => (
          <p key={index}>{e}</p>
        ))}
      </div>
      <hr />
      <h1>Practical Experience</h1>
      <div className="practical">
        {props.data.prac?.map((e, index) => (
          <p key={index}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default Cv;
