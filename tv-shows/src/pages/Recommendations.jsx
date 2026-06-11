import { useState } from "react";
import '../css/Recommendations.css'

function getWordFrequencies(words) {
  return words.reduce((acc, word) => {
    const key = word.toLowerCase().trim();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function RecommendationWordCloud({ words }) {
  if (words.length === 0) return <p>No recommendations yet.</p>

  ;

  const freq = getWordFrequencies(words);
  const max = Math.max(...Object.values(freq));

  return (
    <div className="wordCloud">
      {Object.entries(freq).map(([word, count]) => (
        <span
          key={word}
          style={{
            fontSize: `${1 + (count / max) * 3}rem`,
            opacity: 0.6 + (count / max) * 0.4,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

function TvRecommendations() {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setWords([...words, input.trim()]);
    setInput("");
  };

  return (
    <>
      <form className="recommendations" onSubmit={handleSubmit}>
        <label htmlFor="recommendedShow">What show will you recommend? </label>
        <input
          id="recommendedShow"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <RecommendationWordCloud words={words} />
    </>
  );
}

export default TvRecommendations