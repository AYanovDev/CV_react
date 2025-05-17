import { useState } from "react";
import "./Entry.css";

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

  function submitEdu() {
    let nonEmptyEdu = edu.filter((e) => e !== "");
    setEdu(nonEmptyEdu);
    props.setData((prevData) => {
      return { ...prevData, edu: nonEmptyEdu };
    });
  }

  function renderEduInput(eduItem, index) {
    return (
      <input
        key={index}
        type="text"
        value={eduItem}
        onChange={(e) =>
          setEdu((prevEdu) => {
            let newEdu = prevEdu.slice();
            newEdu[index] = e.target.value;
            return newEdu;
          })
        }
      />
    );
  }

  function renderPracInput(pracItem, index) {
    return (
      <input
        key={index}
        type="text"
        value={pracItem}
        onChange={(e) =>
          setPrac((prevPrac) => {
            let newPrac = prevPrac.slice();
            newPrac[index] = e.target.value;
            return newPrac;
          })
        }
      ></input>
    );
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
      {edu.map(renderEduInput)}

      <button className="edu" onClick={submitEdu}>
        Submit
      </button>
      <button onClick={() => setEdu((prevEdu) => [...prevEdu, ""])}>
        Add more
      </button>
      <h1>Practical Experience</h1>
      {prac.map(renderPracInput)}
      <button className="prac" onClick={submit}>
        Submit
      </button>
      <button onClick={() => setPrac((prevPrac) => [...prevPrac, ""])}>
        Add more
      </button>
    </div>
  );
}

export default Entry;
