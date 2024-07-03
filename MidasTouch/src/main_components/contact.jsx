import React from "react";
import Banner3 from "../banner3";
import '../assets/contact.css'
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";

const Contact  =  () => {

    const customIcon = new Icon({
        iconUrl: "../../images/icon-pin.png",
        iconSize: [38, 38]
    });

    const [form, setForm] = useState({
        First_name: '',
        Last_name: '',
        Email: '',
        Message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "message"), form);
            alert("Message sent successfully");
            setForm({
                First_name: '',
                Last_name: '',
                Email: '',
                Message: ''
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

  
    return(
        <>
            <Banner3/>
            <div className="spacer3"/>
            <div className="contact-container">
               
                <div className="heading4">
                    <p className="head4">Write us a message</p>
                </div> 
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="First_name" value={form.First_name} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="Last_name" value={form.Last_name} onChange={handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="Email" value={form.Email} onChange={handleChange}required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="message" id="message" name="Message" rows="5" value={form.Message} onChange={handleChange} required></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <br/>
                <br/>
                <div className="heading4">
                    <p className="head4">Visit us</p>
                </div> 
               <MapContainer 
                    className="map-container"
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
            </div>
       </>
       
    );
}

export default Contact;