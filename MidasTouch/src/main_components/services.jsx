import React from "react";
import Banner2 from "../banner2";
import  '../assets/services.css'
import GenStation from "../genStation";
import OfficeEquipment from "../ofEquip";
import Consumables from "../consumables";
import FoodPacks from "../foodpacks";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import genStation from '../assets/images/stationery-nbg.png';
import ream from '../assets/images/ream-nbg.png';
import hardcover from '../assets/images/hardcover-nbg.png';
import instrument from '../assets/images/instrument-nbg.png';
import organizer from '../assets/images/ornagizer-nbg.png';
import printer from '../assets/images/printer-reg.png';
import envelope from '../assets/images/envelope-nbg.png';
import binding from '../assets/images/binding-nbg.png';
import toner from '../assets/images/toner-nbg.png';
import harddrive from '../assets/images/harddrive-nbg.png';
import ink from '../assets/images/ink-nbg.png';
import calculator from '../assets/images/calculator-nbg.png';
import sausage from '../assets/images/sausage-tray-nbg.png';
import container from '../assets/images/container-nbg.png';
import utensils from '../assets/images/utensils-nbg.png';
import lunchbox from '../assets/images/lunchbox-nbg.png';




const Services = () =>  {
    const { hash } = useLocation();

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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
            crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <Banner2/>
        
            <div className="service-container">
                <div className="spacer2"/>
                <br/>
                <br/>
                <br/>
                <div className="table-container">
                    <table className="styled-table">
                        <tr>
                            <td><i className="fa-regular fa-pen-to-square icon3"></i></td>
                            <td><i className="fa-solid fa-print icon3"></i></td>
                        </tr>
                         <tr>
                            <td><i className="fa-solid fa-computer icon3"></i></td>
                            <td><i className="fa-solid fa-utensils icon3"></i></td>
                        </tr>
                     </table>
                </div>
                <section id="stationery">
                        <br/>
                        <br/>
                        <br/>
                        <div className="heading3">
                            <p className="head3">General Stationery</p>
                        </div> 
                        <GenStation/>
                        <br/>
                        <br/>
                        <div className="table2-container">
                            <div className="row2">
                                <div className="cell2"><img className="gen-image1" src={genStation}/></div>
                                <div className="cell2"><img className="gen-image2" src={ream}/></div>
                                <div className="cell2"><img className="gen-image2" src={hardcover}/></div>
                                <div className="cell2"><img className="gen-image2" src={instrument}/></div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                </section>
                <section id="office">
                        <br/>
                        <br/>
                        <br/>
                        <div className="heading3">
                            <p className="head3">Office Equipment</p>
                        </div> 
                        <OfficeEquipment/>
                        <br/>
                        <br/>
                        <div className="table2-container">
                            <div className="row2">
                                <div className="cell2"><img className="gen-image1" src={organizer}/></div>
                                <div className="cell2"><img className="gen-image2" src={printer}/></div>
                                <div className="cell2"><img className="gen-image2" src={envelope}/></div>
                                <div className="cell2"><img className="gen-image2" src={binding}/></div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                </section>
                <section id="consumables">
                        <br/>
                        <br/>
                        <br/>
                        <div className="heading3">
                            <p className="head3">Computer Consumables</p>
                        </div> 
                        <br/>
                        <br/>
                        <Consumables/>
                        <br/>
                        <br/>
                        <div className="table2-container">
                            <div className="row2">
                                <div className="cell2"><img className="gen-image1" src={toner}/></div>
                                <div className="cell2"><img className="gen-image2" src={harddrive}/></div>
                                <div className="cell2"><img className="gen-image2" src={ink}/></div>
                                <div className="cell2"><img className="gen-image2" src={calculator}/></div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                </section>
                <section id="food">
                        <br/>
                        <br/>
                        <br/>
                        <div className="heading3">
                            <p className="head3">Food related products</p>
                        </div>
                        <FoodPacks/>
                        <br/>
                        <br/>
                        <div className="table2-container">
                            <div className="row2">
                                <div className="cell2"><img className="gen-image1" src={sausage}/></div>
                                <div className="cell2"><img className="gen-image2" src={container}/></div>
                                <div className="cell2"><img className="gen-image2" src={utensils}/></div>
                                <div className="cell2"><img className="gen-image2" src={lunchbox}/></div>
                            </div>
                        </div>
                </section>


            </div>
           
        </>
    );
}
export default  Services;