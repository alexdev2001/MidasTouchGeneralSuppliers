import Slideshow from "../slidshow";
import '../assets/landing.css'
import BgContent from "./bgContent";
import LogoCarousel from "./logoCarousel";
import { Link } from "react-router-dom";
import Footer from "./footer";

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
                    <p className="head">Who we are</p>
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
            
        </>
       
    )
}



export default Landing; 