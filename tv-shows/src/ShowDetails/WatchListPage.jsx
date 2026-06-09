import { useWatchlist } from "../context/WatchlistContext";
import { useNavigate } from "react-router-dom";
import './WatchListPage.css'


function WatchlistPage() {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const navigate = useNavigate()

  if (!watchlist || watchlist.length === 0) {
    return (
      <div className = "empty">
        <h1>My Watchlist</h1>
        <p>No shows saved yet.</p>
        <button onClick={() => {navigate('/shows')}}>Browse shows</button>

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
            <p>{show.genres?.join(' | ') || 'No genres listed'}</p>
            <button onClick={() => removeFromWatchlist(show.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchlistPage;