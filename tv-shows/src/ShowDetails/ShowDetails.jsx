import { useState, useEffect, useContext } from 'react'
import { useOutletContext, Link, useParams } from 'react-router-dom'
import { useWatchlist } from "../context/WatchlistContext";

function ShowDetails () {
    const [show, setShow] = useState(null)
    const { id } = useParams()

    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(json => setShow(json))
    }, [id])

        console.log('id is:', id);

    if (!show) return <h4>Loading show details...</h4>

    const added = isInWatchlist(show.id);

    const handleToggle = () => {
    added ? removeFromWatchlist(show.id) : addToWatchlist(show);
    };



    return (
        <>
            <div className = 'showDetails'>

                <div className = 'l-Details'>

                    <Link to='/'><button>Back</button></Link>

                    <h1>{show.name}</h1>
                    < img src = {show.image?.medium} alt={show.name} />


                </div>

                <div className = 'r-Details'>
                    <p>Genres: {show.genres?.join(' | ')}</p>
                    <p>Rating: {show.rating?.average ?? 'N/A'}</p>
                    <p dangerouslySetInnerHTML = {{__html: show.summary}} />

                <div>
                    {/* ...your existing show details UI... */}
                    <button onClick={handleToggle}>
                        {added ? "✓ In Watchlist" : "+ Add to Watchlist"}
                    </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ShowDetails