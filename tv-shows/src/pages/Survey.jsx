import { useState } from "react";
import { useSurvey } from "../context/SurveyContext"
import '../css/Survey.css'
function Survey() {
    const watchHrsOptions = [
    "0 hours (I don't watch TV shows)",
    "1 - 5 hours per week",
    "6 - 10 hours per week",
    "11 - 20 hours per week",
    "More than 20 hours per week"
    ];

    const watchMethod = [
    "Streaming Services",
    "Cable/Satellite",
    "Live on network TV",
    "Recorded"
    ];

    const genres = [
    "Drama",
    "Comedy",
    "Sci-Fi/Fantasy",
    "Reality",
    "True Crime",
    "Documentary",
    "Horror"
    ];

    const series = [
        "Binge Watch",
        "Weekly"
    ]



    const [watchHrs, setWatchHrs] = useState("");
    const [preferredMethod, setPreferredMethod] = useState("");
    const [genresChoice, setGenresChoice] = useState([]);
    const [favoriteShow, setFavoriteShow] = useState("")
    const [seasonWatch, setSeasonWatch] = useState("")
    const { results, setResults } = useSurvey();


    const handleGenreChange = (genre) => {
    setGenresChoice((prev) =>
        prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry ={
            watchHrs,
            preferredMethod,
            genresChoice,
            favoriteShow,
            seasonWatch,
        }
        setResults((prev) => [...prev, newEntry])

        setWatchHrs("");
        setPreferredMethod("");
        setGenresChoice([]);
        setFavoriteShow("");
        setSeasonWatch("");

    }

return (
    <>
        <div className = "survey">

        <form onSubmit={handleSubmit}>

        <h1>SURVEY</h1>
        <ol>
        <li>
            How many hours do you spend watching TV shows?

            {watchHrsOptions.map((option) => (
            <div key={option}>
                <label>
                <input
                    type="radio"
                    name="watchHours"
                    value={option}
                    checked={watchHrs === option}
                    onChange={(e) => setWatchHrs(e.target.value)}
                />
                {option}
                </label>
            </div>
            ))}
        </li>

        <li>
            What is your preferred way to watch TV?

            {watchMethod.map((option2) => (
            <div key={option2}>
            <label>
                <input
                type="radio"
                name="watchMethod"
                value={option2}
                checked={preferredMethod === option2}
                onChange={(e) => setPreferredMethod(e.target.value)}
                />
                {option2}
            </label>
            </div>
            ))}
        </li>

        <li>
          Which genres do you watch the most?

          {genres.map((option3) => (
            <div key={option3}>
              <label>
                <input
                  type="checkbox"
                  value={option3}
                  checked={genresChoice.includes(option3)}
                  onChange={() => handleGenreChange(option3)}
                />
                {option3}
              </label>
            </div>
          ))}
        </li>

        <li>
          <label htmlFor="favoriteTVShow">
            What is your favorite TV show of all time?
          </label>
          <input
            id="favoriteShow"
            type="text"
            value={favoriteShow}
            onChange={(e) => setFavoriteShow(e.target.value)}
            />
        </li>

        <li>
          Do you prefer to binge-watch a full season or watch episodes weekly?

          {series.map((option5) => (
            <div key = {option5}>
                <label>
                    <input
                    type="radio"
                    value={option5}
                    checked={seasonWatch === option5}
                    onChange={(e) => setSeasonWatch(e.target.value)}
                    />
                    {option5}
                </label>

            </div>
          ))}
        </li>
      </ol>

        <button type="submit">Submit</button>

      </form>

          </div>

    </>
  );
}

export default Survey;