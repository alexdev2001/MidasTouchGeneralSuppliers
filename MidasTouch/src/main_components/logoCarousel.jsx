import React from "react";
import Slider from "react-slick";
import '../assets/logoCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    { bw: '../../images/shoprite_bw.webp', color: '../../images/shoprite_reg.webp', link: 'https://www.shoprite.mw/'},
    { bw: '../../images/mdf_bw.png', color: '../../images/mdf_reg.png', link: 'https://www.malawi.gov.mw/'},
    { bw: '../../images/cent_bw.png', color: '../../images/cent_reg.png', link: 'https://www.centenarybank.co.mw/'},
    { bw: '../../images/escom_bw.png', color: '../../images/escom_reg.png', link: 'https://www.escom.mw/'}

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