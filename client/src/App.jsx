import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter text");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/summarize", {
        text
      });
      setResult(res.data);
    } catch {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="card">

        <h1 className="title">✨ AI Summarizer</h1>

        <textarea
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {loading ? "Analyzing..." : "Summarize"}
        </button>

        {error && <p className="error">{error}</p>}

        {result && (
          <div className="result-box">

            <div className="section">
              <h3>📌 Summary</h3>
              <p>{result.summary}</p>
            </div>

            <div className="section">
              <h3>🧠 Key Points</h3>
              <ul>
                {result.keyPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="section sentiment">
              <h3>💬 Sentiment</h3>
              <span className={`badge ${result.sentiment}`}>
                {result.sentiment}
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;