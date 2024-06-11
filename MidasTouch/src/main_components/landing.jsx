import Slideshow from "../slidshow";
import '../assets/landing.css'
import BgContent from "./bgContent";
import LogoCarousel from "./logoCarousel";
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
            integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
            crossorigin="anonymous" referrerPolicy="no-referrer" />
            <div className="landing-container">
                <Slideshow/>
                <div className="spacer"></div>
                <div className="heading">
                    <p className="head">A brief background</p>
                </div> 
                <BgContent/>
                <br/>
                <div className="heading">
                    <p className="head">What we do</p>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="icon">
                            
                        </div>
                        <div className="text">
                            <i className="fa-solid fa-stapler icon"></i>
                            <p className='icon-content'>We stock a range of general stationery, 
                            like writing materials, papers, staplers, organisers...</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="icon">
                            
                        </div>
                        <div className="text">
                            <i className="fa-solid fa-computer icon"></i>
                            <p className='icon-content'>We supply a Office equipment such as computers, 
                            printers, photocopiers and various office machines</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="icon"> 
                        </div>
                        <div className="text">
                            <i className="fa-solid fa-briefcase icon"></i>
                            <p className='icon-content'>We supply a wide range of office furniture for a number of different purposes, 
                            from increasing employee productivity to spicing up your space.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="icon"> 
                        </div>
                        <div className="text">
                            <i className="fa-solid fa-plug icon"></i>
                            <p className='icon-content'>We sell computer consumables and accessories such as printer toners, smartphone LCD's</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="icon"> 
                        </div>
                        <div className="text">
                            <i className="fa-solid fa-utensils icon"></i>
                            <p className='icon-content'>We supply food packaging films, packs and various kitchen utensils</p>
                        </div>
                    </div>
                </div>
                <div className="heading">
                    <p className="head">Who we've worked with</p>
                </div> 
            </div>
            <LogoCarousel/>
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
                &copy; 2024 Imani Systems.
            </div>
            <div className="footer-links">
                <ul>
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



export default Landing; 