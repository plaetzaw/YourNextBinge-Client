import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
      <>
    <Nav className="navbar">
     <NavLink  
     to="/">
         <h1>MyNextBinge</h1>
         </NavLink> 
         <Bars />
         <NavMenu>
             <NavLink to="/movies" activeStyle>Movies</NavLink>
             <NavLink to="/tvshows" activeStyle>TV Shows</NavLink>
             <NavLink to="/people" activeStyle>People</NavLink>
         </NavMenu>
         <NavBtn>
             <NavBtnLink to="/wherever">Wherever</NavBtnLink>
         </NavBtn>
    </Nav>
    </>
  )
}

export default Navbar
