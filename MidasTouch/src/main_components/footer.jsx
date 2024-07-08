import React from "react"; 
import { Link } from "react-router-dom"; 
import '../assets/footer.css'
import ScrollToTop from "../../../scrollTop";
import logoFooter from '../assets/images/logo.png';

const Footer = () => {
    return (
        <>
             <div className="footer">
            <div className="foot-logo">
                <img src={logoFooter} alt="Logo" className="foot-image" />
                <div className="foot-logo-text">
                    <ul>
                        <li>+265999026225</li>
                        <li>midasgeneralsuppliers@gmail.com</li>
                          <li> P.O. Box 32714, Chichiri, Blantyre </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024 ImaniSystems.
            </div>
            <div className="footer-links">
                <ScrollToTop/>
                <ul>
                    <div className="foot-link-head">About</div>
                    <li><Link to="/about#overview">Overview</Link></li>
                    <li><Link to="/about#values">Values</Link></li>
                    <li><Link to="/about#management">Management</Link></li>
                    <li><Link to="/about#find">Find us</Link></li>
                </ul>
            </div>
            <div className="footer-links2">
                <ul>
                    <div className="foot-link-head">Pages</div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-links3">
                <ul>
                    <div className="foot-link-head">Services</div>
                    <li><Link to="/services#stationery">Stationery</Link></li>
                    <li><Link to="/services#office">Office</Link></li>
                    <li><Link to="/services#consumables">Consumables</Link></li>
                    <li><Link to="/services#food">Food packs</Link></li>
                </ul>
            </div>
           
        </div>
        </>
    )
}

export default Footer;