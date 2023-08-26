import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const getAgg = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="Ex. Vivek.."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      
      
      <button type="submit" onClick={getAgg}>
        Predict Age
      </button>

      <h1>Predict Age : {age}</h1>
    </div>
  );
}

export default App;
