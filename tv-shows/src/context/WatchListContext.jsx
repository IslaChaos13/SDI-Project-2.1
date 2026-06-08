import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (show) => {
    setWatchlist((prev) =>
      prev.find((s) => s.id === show.id) ? prev : [...prev, show]
    );
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((s) => s.id !== id));
  };

  const isInWatchlist = (id) => watchlist.some((s) => s.id === id);

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}