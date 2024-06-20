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
                <div className="heading1">
                    <p className="head1">Who we are</p>
                </div> 
                <BgContent/>
                <br/>
                <br/>
                <br/>
                <div className="heading1">
                    <p className="head1">What we do</p>
                </div>
                <Link to={"/services#stationery"}>
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
                </Link>
                
                <Link to={"/services#office"}>
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
                </Link>
               <Link to={"/services#consumables"}>
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
               </Link>

                <Link to={"/services#food"}>
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
                </Link>
                <br/>
                <br/>
                <br/>
                <div className="heading1">
                    <p className="head1">Who we've worked with</p>
                </div> 
            </div>
            <LogoCarousel/>
            
        </>
       
    )
}



export default Landing; 