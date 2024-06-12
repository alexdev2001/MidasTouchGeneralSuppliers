import React from "react"; 
import { Link } from "react-router-dom"; 
import '../assets/footer.css'

const Footer = () => {
    return (
        <>
             <div className="footer">
            <div className="foot-logo">
                <img src="../../images/logo.png" alt="Logo" className="foot-image" />
                <div className="foot-logo-text">
                    <ul>
                        <li>WA: +265999026225</li>
                        <li>Email: midasgeneralsuppliers@gmail.com</li>
                          <li>Address: P.O. Box 32714, Chichiri Blantyre 3</li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024 ImaniSystems.
            </div>
            <div className="footer-links">
                <ul>
                    <br/>
                    <div className="foot-link-head">About</div>
                    <li><Link to="/home">Overview</Link></li>
                    <li><Link to="/about">Core Values</Link></li>
                    <li><Link to="/services">Management</Link></li>
                    <li><Link to="/contact">Find us</Link></li>
                </ul>
            </div>
            <div className="footer-links2">
                <ul>
                    <div className="foot-link-head">Pages</div>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
           
        </div>
        </>
    )
}

export default Footer;