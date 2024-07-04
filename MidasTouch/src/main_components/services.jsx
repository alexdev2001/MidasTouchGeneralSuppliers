import React from "react";
import Banner2 from "../banner2";
import  '../assets/services.css'
import GenStation from "../genStation";
import OfficeEquipment from "../ofEquip";
import Consumables from "../consumables";
import FoodPacks from "../foodpacks";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


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
                                <div className="cell2"><img className="gen-image1" src="../src/assets/images/stationery-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/ream-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/hardcover-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/instrument-nbg.png"/></div>
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
                                <div className="cell2"><img className="gen-image1" src="../src/assets/images/ornagizer-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/printer-reg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/envelope-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/binding-nbg.png"/></div>
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
                        <Consumables/>
                        <div className="table2-container">
                            <div className="row2">
                                <div className="cell2"><img className="gen-image1" src="../src/assets/images/toner-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/harddrive-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/ink-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/calculator-nbg.png"/></div>
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
                                <div className="cell2"><img className="gen-image1" src="../src/assets/images/sausage-tray-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/container-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/utensils-nbg.png"/></div>
                                <div className="cell2"><img className="gen-image2" src="../src/assets/images/lunchbox-nbg.png"/></div>
                            </div>
                        </div>
                </section>


            </div>
           
        </>
    );
}
export default  Services;