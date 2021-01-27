import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'
// import Dropdown from './Dropdown'


const Navbar = () => {
    const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);

    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const onMouseEnter = () => {
    //     if(window.innerWidth < 960){
    //         setDropdown(false)
    //     } else {
    //         setDropdown(true)
    //     }
    // }

    // const onMouseLeave = () => {
    //     if(window.innerWidth < 960){
    //         setDropdown(true)
    //     } else {
    //         setDropdown(false)
    //     }
    // }

  return (
    <>
    <nav className="navbar">
    <Link to="/" className="navbar-logo">
        <h1>YourNextBinge</h1>
    </Link>
    <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className={'nav-item'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
                <Link to="/" className='fas fa-caret-down' onClick={closeMobileMenu}>
                    Home
                </Link>
                {dropdown && <Dropdown/>}
            </li> */}
            <li className={'nav-item'}>
                <Link to="/movies" className='nav-links' onClick={closeMobileMenu}>
                    Movies
                </Link>
            </li>
            <li className={'nav-item'}>
                <Link to="/tvshows" className='nav-links' onClick={closeMobileMenu}>
                    TV Shows
                </Link>
            </li>
            <li className={'nav-item'}>
                <Link to="/people" className='nav-links' onClick={closeMobileMenu}>
                    People
                </Link>
            </li>
            <li className={'nav-item'}>
                <Link to="/search" className='nav-links-mobile' onClick={closeMobileMenu}>
                    Search
                </Link>
            </li>
        </ul>
        <Button />
    </nav>    
    </>
  )
}

export default Navbar
