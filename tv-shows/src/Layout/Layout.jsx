import {useState} from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './Layout.css'

function Layout(){
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    return(
    <>
        <div className ="layout-main">

            <ul className = 'navbar'>
                <li ><button className ='home' type="button" onClick={() => {navigate('/')}}>Home</button></li>
                <li><button className ='shows' onClick={() => {navigate('./shows')}}>TV Shows</button></li>
                <li> <button className='watchlist' onClick={() => {navigate('/watchlist')}}>Watch List</button></li>
                <li><button className='survey'>Survey</button></li>
                <li> <input
                className = 'search'
                type ='text'
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            /></li>
            </ul>




        </div>


        <Outlet context = {{search}}/>
    </>
    )
}

export default Layout