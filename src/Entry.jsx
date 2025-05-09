import { useState } from "react";
import "./Entry.css";

function Entry(props) {
  const [value, setValue] = useState("");

  function submit() {
    props.setData({ name: value });
  }

  return (
    <div className="entry_section">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Entry;
