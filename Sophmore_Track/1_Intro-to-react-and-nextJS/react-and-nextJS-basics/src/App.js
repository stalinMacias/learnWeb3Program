import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LoadDataFromServer />
      <DependentEffect />
      <AsyncStateVariables />
    </div>
  )
}

function LoadDataFromServer() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadData() {
    setLoading(true);

    // Imaginary function that performs an API call to load
    // data from a server
    const data = await apiCall();
    setData(data);

    setLoading(false);
  }

  // loadData is the function that is ran
  // An empty dependency array means this code is ran
  // once when the page loads
  useEffect(() => {
    loadData();
  }, []);

  return <div>{loading ? "Loading..." : data}</div>;
}

async function apiCall() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("ABCDEF"), 10000);
  });
}

function DependentEffect() {
  const names = ["Alice", "Bob", "Charlie", "David", "Emily","Stalin"];

  const [recommendations, setRecommendations] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.length === 0) {
      setRecommendations([]);
    } else if (searchText.length > 0) {
      const newRecs = names.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecommendations(newRecs);
    }
  }, [searchText]);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <h2>Recommendations:</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}

// The HTML view will be updated asynchronously
function AsyncStateVariables() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <div>
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}