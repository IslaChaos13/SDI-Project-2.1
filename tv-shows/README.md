# Binge Master SPA - React

SPA program that fetches data from a TV Show API, that allows you to search TV shows, query for user watching trends, create a watchilist, and user can provide TV recommendations.

## Home Page

![HomePage](/tv-shows/public/README_Photos/HomePage.png)

The home page has working button overlays on the color boxes on the bottom of the image. As the screen shows; the color of the buttor corresponds to the different pages:

1. Orange: Shows
2. Green: My Watch List
3. Blue: Survey
4. Purple: Survey Results
5. Recommendations

The buttons uses a button overlay in the Homepage.css.

## TV Shows

![TV-Shows](/tv-shows/public/README_Photos/TvShows.png)

With the exception of the homepage, all pages have a navigation bar on top - listing: Home, TV Shows, Watch List, Survey, Survey Results and Recommendations.

This page also has a function search bar for the different shows.

When you click on the TV show poster, you will be redirected to the show details page.

![Bitten](/tv-shows/public/README_Photos/Show-Details.png)

The show details page has the title and show poster on the left hand of the screen. On the right hadn of the screen, the show genres, rating and description is provided. This page has a working 'back to shows' and 'add to watchlist'

### Empty Watch List Page

![Empty-Watchlist-Page](/tv-shows/public/README_Photos/Watchlist_Empty.png)

Both the brows show and tv shows buttons will redirect you the list of tv shows.

### Watch List Filled

![Watchlist](/tv-shows/public/README_Photos/Watchlist.png)

### Survey

![Survey](/tv-shows/public/README_Photos/Survey.png)
The survey polls users asking questions watching trends and recommended watch methods and genres. Results are populated to its own page under Survey Results.

[!Survey-Results](/tv-shows/public/README_Photos/Survey-Results.png)

### Recommendations

![No-Recommendations](/tv-shows/public/README_Photos/No_Recommendations.png)

![Recommendations](/tv-shows/public/README_Photos/Recommendations.png)

When a recommendation is submitted, it will appear as a word cloud. The text size is adjusted when users suggest the same tv show.
