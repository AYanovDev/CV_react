import Entry from "./Entry.jsx";
import Cv from "./Cv.jsx";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  return (
    <>
      <Entry setData={setData} />
      <Cv data={data} />
    </>
  );
}

export default App;
