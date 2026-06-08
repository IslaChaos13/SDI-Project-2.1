import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router-dom";
import './WatchListPage.css'


function WatchlistPage() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <div>
        <h1>My Watchlist</h1>
        <p>No shows saved yet.</p>
        <Link to="/">Browse shows</Link>
      </div>
    );
  }

  return (
    <div className ="watchlist">
      <h1>My Watchlist ({watchlist.length})</h1>
      <div className="watchlist-grid">
        {watchlist.map((show) => (
          <div key={show.id} className="watchlist-card">
            <img src={show.image?.medium} alt={show.name} />
            <h3>{show.name}</h3>
            <p>{show.genres.join(' | ')}</p>
            <button onClick={() => removeFromWatchlist(show.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchListPage;