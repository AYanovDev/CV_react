import { useState } from "react";
import "./Entry.css";

function Entry(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function submit(e) {
    const field = e.currentTarget.className;
    props.setData((prevData) => {
      if (field === "name") {
        return { ...prevData, name };
      } else if (field === "email") {
        return { ...prevData, email };
      } else if (field === "phone") {
        return { ...prevData, phone };
      }
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
      {/*<h1>Educational Experience</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
      <button>Add more</button>
      <h1>Practical Experience</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
      <button>Add more</button> */}
    </div>
  );
}

export default Entry;
