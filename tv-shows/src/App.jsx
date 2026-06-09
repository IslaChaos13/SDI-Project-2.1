import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Layout from "./Layout/Layout";
import Shows from "./Shows/Shows";
import ShowDetails from './ShowDetails/ShowDetails'
import { WatchlistProvider } from "./context/WatchlistContext";
import { SurveyProvider } from "./context/SurveyContext"
import WatchlistPage from "./ShowDetails/WatchlistPage";
import Survey from "./pages/Survey"
import SurveyResults from "./pages/SurveyResults"


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
      },
      {
        path: "/SurveyResults",
        element: <SurveyResults />
      }

    ]
  }
]);

function App() {
  return(
  <WatchlistProvider>
    <SurveyProvider>
  <RouterProvider router={router} />
  </SurveyProvider>
  </WatchlistProvider>)
}

export default App;