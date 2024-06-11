import React from 'react'
import './assets/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="../images/logo.png" alt="Logo" className='logo' /> {/* Placeholder for the logo */}
                </Link>
            </div>
            <ul className="navbar-nav">
             <li className="nav-item">
                <Link to='/home' className="nav-link">Home</Link>
             </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            </ul>
            </nav>
            
        </>
        
    )
}

export default Navbar;