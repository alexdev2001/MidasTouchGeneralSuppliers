import React from "react";
import Banner from "../banner";
import '../assets/about.css';
import OverContent from "../ovContent";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'

const About = () => {

    const { hash } = useLocation();

    const customIcon = new Icon({
        iconUrl: "../../images/icon-pin.png",
        iconSize: [38, 38]
    })

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);
    return(
        <>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
           crossOrigin="anonymous" referrerPolicy="no-referrer" />
           <script src="https://kit.fontawesome.com/877d2cecdc.js" crossOrigin="anonymous"></script>
           <Banner/>
            <div className="about-container">
                
                <div className="spacer"></div>
                <section id="overview">
                        <div className="heading2">
                            <p className="head2">Company Overview</p>
                        </div> 
                <OverContent/>
                </section>
                <section id="values">
                        <br/>
                        <br/>
                        <br/>
                        <div className="heading2">
                            <p className="head2">Our Values</p>
                        </div> 
                        <div className="value-text">At Midas, we aspire to the following standards</div>
                        <div className="table">
                            <div className="row">
                                <div className="cell"><i className="fa-regular fa-eye icon2"></i></div>
                                <div className="cell-text"><br/><br/><br/><div className="cell-text-head">Vision:</div>
                                    To become the most dependable supplier of quality stationery and consumables to private sector, government, schools and individuals in Malawi. 
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell"><i className="fa-regular fa-map icon2"></i></div>
                                <div className="cell-text"><br/><br/><br/><div className="cell-text-head">Mission:</div>
                                To make Midas Touch a household name in the stationery segment reputed by supplying high quality office consumables at the fairest price that always translates in expenditure savings.  </div>
                            </div>
                            <div className="row">
                                <div className="cell"><i className="fa-thumbtack icon2"></i></div>
                                <div className="cell-text"><br/><br/><br/><div className="cell-text-head">Goals:</div>
                                To maximise product range expansion and improve the brand of our business within the next 5 years</div>
                            </div>
                        </div>
                </section>
                <section id="management">
                         <br/>
                        <br/>
                        <br/>
                        <div className="heading2">
                            <p className="head2">Management</p>
                        </div> 
                        <div className="manage-content">
                        Our team at is composed of dedicated 
                        and experienced professionals who are committed to delivering excellence and ensuring 
                        the highest standards of customer service and operational efficiency.
                        </div>
                        <br/>
                        <br/>
                        <div className="table2">
                            <div className="row2">
                                <div className="cell-text2">Managing Director: </div>
                                <div className=".cell-container">
                                    <div className="cell-boarder1">

                                    </div>
                                    <div className="cell-text-under">Mr MacDonald Chibwe</div>
                                </div>
                                <div className="cell-text2">Operations Director: </div>
                                <div className=".cell-container">
                                    <div className="cell-boarder">

                                    </div>
                                    <div className="cell-text-under">Mrs Grace Chibwe</div>
                                </div>
                                <div className="cell-text2">Sales Lead: </div>
                                <div className=".cell-container">
                                    <div className="cell-boarder">

                                    </div>
                                    <div className="cell-text-under">Mr Gift Tseka</div>
                                </div>
                            </div>
                           
                        </div>
                </section>
                <section id="find">
                        <br/>
                        <br/>
                        <div className="heading2">
                            <p className="head2">Find us</p>
                        </div> 
                        <MapContainer 
                            className="about-map-container"
                            center={[-15.7867, 35.0082]} 
                            zoom={20}  
                            dragging={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                            boxZoom={false}
                            keyboard={false}
                            touchZoom={false}>
                            <TileLayer
                            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-15.7867, 35.0082]} icon={customIcon}></Marker>
                        </MapContainer>
                </section>
                
            </div>
            
        </>
    )
}

export default About;