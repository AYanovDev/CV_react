import { useState } from "react";
import "./Entry.css";
import MultipleInputs from "./MultipleInputs";

function Entry(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [edu, setEdu] = useState([""]);
  const [prac, setPrac] = useState([""]);

  function submit(e) {
    const field = e.currentTarget.className;
    props.setData((prevData) => {
      if (field === "name") {
        return { ...prevData, name };
      } else if (field === "email") {
        return { ...prevData, email };
      } else if (field === "phone") {
        return { ...prevData, phone };
      } else if (field === "edu") {
        return { ...prevData, edu };
      } else if (field === "prac") {
        return { ...prevData, prac };
      }
    });
  }

  function submitEdu(nonEmptyEdu) {
    props.setData((prevData) => {
      return { ...prevData, edu: nonEmptyEdu };
    });
  }

  function submitPrac(nonEmptyPrac) {
    props.setData((prevData) => {
      return { ...prevData, prac: nonEmptyPrac };
    });
  }

  return (
    <div className="entry_section">
      <h1>Personal details</h1>
      <h2>Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="name" onClick={submit}>
        Submit
      </button>
      <h2>E-Mail address</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="email" onClick={submit}>
        Submit
      </button>
      <h2>Phone Number</h2>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="phone" onClick={submit}>
        Submit
      </button>
      <h1>Educational Experience</h1>
      <MultipleInputs value={edu} setValue={setEdu} submit={submitEdu} />
      <h1>Practical Experience</h1>
      <MultipleInputs value={prac} setValue={setPrac} submit={submitPrac} />
    </div>
  );
}

export default Entry;
