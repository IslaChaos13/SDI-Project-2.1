import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Layout from "./Layout/Layout";
import Shows from "./Shows/Shows";
import ShowDetails from './ShowDetails/ShowDetails'
import { WatchlistProvider } from "./context/WatchlistContext";
import WatchlistPage from "./ShowDetails/WatchlistPage";
import Survey from "./pages/Survey"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "shows",
        element: <Shows />
      },
      {
        path: "showdetails/:id",
        element: <ShowDetails />
      },
      {
        path: "/watchlist",
        element: <WatchlistPage />
      },
       {
        path: "/survey",
        element: <Survey />
      }

    ]
  }
]);

function App() {
  return(
  <WatchlistProvider>
  <RouterProvider router={router} />
  </WatchlistProvider>)
}

export default App;