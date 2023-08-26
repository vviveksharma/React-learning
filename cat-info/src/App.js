import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [catFact, setCatFact] = useState("");

  const FetchData = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      <button type="submit" onClick={FetchData}>
        Cat Info
      </button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
