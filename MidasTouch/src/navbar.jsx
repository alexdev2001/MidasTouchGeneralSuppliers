import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './assets/navbar.css';

const Navbar = () => {
    const location = useLocation();
    
    return (
        <>
            <nav className="navbar z-30">
                <div className="navbar-brand">
                    <Link to="/">
                        <img src="../images/logo.png" alt="Logo" className='logo' />
                    </Link>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/about" className={`nav-link2 ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/about#team" className={`dropdown-link ${location.hash === '#team' ? 'active' : ''}`}>Overview</Link></li>
                            <li><Link to="/about#values" className={`dropdown-link ${location.hash === '#values' ? 'active' : ''}`}>Values</Link></li>
                            <li><Link to="/about#management" className={`dropdown-link ${location.hash === '#management' ? 'active' : ''}`}>Management</Link></li>
                            <li><Link to="/about#find" className={`dropdown-link ${location.hash === '#find' ? 'active' : ''}`}>Find us</Link></li>        
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/services" className={`nav-link2 ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/services#stationery" className={`dropdown-link ${location.hash === '#stationery' ? 'active' : ''}`}>Stationery</Link></li>
                            <li><Link to="/services#office" className={`dropdown-link ${location.hash === '#office' ? 'active' : ''}`}>Office</Link></li>
                            <li><Link to="/services#consumables" className={`dropdown-link ${location.hash === '#consumables' ? 'active' : ''}`}>Consumables</Link></li>
                            <li><Link to="/services#food" className={`dropdown-link ${location.hash === '#food' ? 'active' : ''}`}>Food Products</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>     
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
