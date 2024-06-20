import React from 'react'
import './assets/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar z-30" >
            <div className="navbar-brand">
                <Link to="/">
                    <img src="../images/logo.png" alt="Logo" className='logo' /> {/* Placeholder for the logo */}
                </Link>
            </div>
            <ul className="navbar-nav">
             <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
             </li>
            <li className="nav-item dropdown">
                <Link to="/about" className="nav-link2">About</Link>
                <ul className="dropdown-menu">
                            <li><Link to="/about#team" className="dropdown-link">Overview</Link></li>
                            <li><Link to="/about#values" className="dropdown-link">Values</Link></li>
                            <li><Link to="/about#management" className="dropdown-link">Management</Link></li>
                            <li><Link to="/about#find" className="dropdown-link">Find us</Link></li>        
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link to="/services" className="nav-link2">Services</Link>
                <ul className="dropdown-menu">
                         <li><Link to="/services#stationery" className="dropdown-link">Stationery</Link></li>
                        <li><Link to="/services#office" className="dropdown-link">Office</Link></li>
                        <li><Link to="/services#consumables" className="dropdown-link">Consumables</Link></li>
                        <li><Link to="/services#food" className="dropdown-link">Food Products</Link></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <Link to="/contact" className="nav-link">Contact</Link>     
            </li>
            </ul>
            </nav>
            
        </>
        
    )
}

export default Navbar;