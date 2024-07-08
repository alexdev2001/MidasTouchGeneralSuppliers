import React from "react";
import Slider from "react-slick";
import '../assets/logoCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shopriteBW from '../assets/images/shoprite_bw.webp';
import shopriteReg from '../assets/images/shoprite_reg.webp';
import mdfBW from '../assets/images/mdf_bw.png';
import mdfReg from '../assets/images/mdf_reg.png';
import centBw from '../assets/images/cent_bw.png';
import centReg from '../assets/images/cent_reg.png';
import gaiaBW from '../assets/images/gaia-bw.png';
import gaiaReg from '../assets/images/gaia-reg.png';
import escomBW from '../assets/images/escom1-bw.png';
import escomReg from '../assets/images/escom1-reg.png';
import hungerProjectBW from '../assets/images/hungerproject-bw.png';
import hungerProjectReg from '../assets/images/hungerproject-reg.png';
import mecBW from '../assets/images/mec-bw.png';
import mecReg from '../assets/images/mec-reg.png';


const logos = [
    { bw: shopriteReg, color: shopriteReg, link: 'https://www.shoprite.mw/'},
    { bw: mdfReg, color: mdfReg, link: 'https://www.malawi.gov.mw/'},
    { bw: centReg, color: centReg, link: 'https://www.centenarybank.co.mw/'},
    { bw: escomReg, color: escomReg, link: 'https://www.escom.mw/'},
    { bw: gaiaReg, color: gaiaReg, link: 'https://www.gaiaglobalhealth.org/'},
    { bw: hungerProjectReg , color: hungerProjectReg, link: 'https://thp.org/'},
    { bw: mecReg, color: mecReg, link: 'https://mec.org.mw/'}

];

const LogoCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: logos.length > 3 ? 3 : logos.length,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: true,
        cssEase: "linear",
        rtl: true,
    }

    return(
        <div className="logo-carousel">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-slide">
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo.bw}
                  alt={`logo-${index}`}
                  className="logo-img"
                  onMouseOver={(e) => (e.currentTarget.src = logo.color)}
                  onMouseOut={(e) => (e.currentTarget.src = logo.bw)}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div> 
    )
}

export default LogoCarousel;