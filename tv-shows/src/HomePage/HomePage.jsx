import { useState, useEffect } from 'react'
import { useNavigate, useOutletContext} from 'react-router-dom'
import './homepage.css'
import Shows from '../Shows/Shows'


function HomePage() {
    const navigate = useNavigate()

  return (
    <div className="tv-container">
      <div className="tv-screen">
        <h1>Binge Master</h1>
        <ul>
            <li>Orange: Shows</li>
            <li>Green: My Watch List</li>
            <li>Blue: Survey</li>
            <li>Purple: Survey Results</li>
            <li>Pink: Recommendations </li>
        </ul>

            <div className="showOverlay">
                <button onClick={() => navigate("../Shows")}></button>
            </div>

            <div className="watchListOverlay">
                <button onClick={() => navigate("/watchlist")}></button>
            </div>

            <div className="surveyOverlay">
                <button onClick={() => navigate("/survey")}></button>
            </div>

            <div className="surveyResultsOverlay">
                <button onClick={() => navigate("/surveyresults")}></button>
            </div>
            <div className="recommend">
                <button
                onClick={() => navigate("/recommendations")}

                ></button>
            </div>

      </div>
    </div>
  );
}

export default HomePage