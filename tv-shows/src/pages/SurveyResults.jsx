import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from 'react-router-dom'
import '../css/SurveyResults.css'

function SurveyResults() {
  const { results } = useSurvey();

  const navigate = useNavigate()

  if(!results || results.length === 0)
    return(
      <div className = "empty-surveyresults">
        <h1>All Survey Results</h1>
        <p> No survey has been submitted yet.</p>
        <button onClick={() => {navigate('/survey')}}>Back to Survey</button>
      </div>
    )

  return (
    <div className ="surveyResults">
      <h2>ALL SURVEY RESULTS</h2>

      {results.map((r, index) => (
        <div className="surveyAnswer" key={index}>
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