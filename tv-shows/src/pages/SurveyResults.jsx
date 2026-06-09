import { useSurvey } from "../context/SurveyContext";

function SurveyResults() {
  const { results } = useSurvey();

  return (
    <div>
      <h2>All Survey Results</h2>
      {results.length === 0 && <p>No responses yet.</p>}
      {results.map((r, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h3>Response #{index + 1}</h3>
          <p><strong>Watch Hours:</strong> {r.watchHrs}</p>
          <p><strong>Preferred Method:</strong> {r.preferredMethod}</p>
          <p><strong>Genres:</strong> {r.genresChoice.join(", ") || "None"}</p>
          <p><strong>Favorite Show:</strong> {r.favoriteShow || "N/A"}</p>
          <p><strong>Watch Style:</strong> {r.seasonWatch}</p>
        </div>
      ))}
    </div>
  );
}

export default SurveyResults;