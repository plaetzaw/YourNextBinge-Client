import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
       <h1>MyNextBinge</h1> 
       <div className="links">
           <Link
           to="/"
           style={{
               color: "Blue",
               backgroundColor: "Yellow",
               borderRadius: "8px",
           }}
           >Home</Link>
            <Link
           to="/movies"
           style={{
               color: "Blue",
               backgroundColor: "Yellow",
               borderRadius: "8px",
           }}
           >Movies</Link>
            <Link
           to="/tvshows"
           style={{
               color: "Blue",
               backgroundColor: "Yellow",
               borderRadius: "8px",
           }}
           >TV Shows</Link>
             <Link
           to="/people"
           style={{
               color: "Blue",
               backgroundColor: "Yellow",
               borderRadius: "8px",
           }}
           >People</Link>
       </div>
      
    </nav>
  )
}

export default Navbar
