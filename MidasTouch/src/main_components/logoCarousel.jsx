import React from "react";
import Slider from "react-slick";
import '../assets/logoCarousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
    { bw: '../src/assets/images/shoprite_bw.webp', color: '../src/assets/images/shoprite_reg.webp', link: 'https://www.shoprite.mw/'},
    { bw: '../src/assets/images/mdf_bw.png', color: '../src/assets/images/mdf_reg.png', link: 'https://www.malawi.gov.mw/'},
    { bw: '../src/assets/images/cent_bw.png', color: '../src/assets/images/cent_reg.png', link: 'https://www.centenarybank.co.mw/'},
    { bw: '../src/assets/images/escom1-bw.png', color: '../src/assets/images/escom1-reg.png', link: 'https://www.escom.mw/'},
    { bw: '../src/assets/images/gaia-bw.png', color: '../src/assets/images/gaia-reg.png', link: 'https://www.gaiaglobalhealth.org/'},
    { bw: '../src/assets/images/hungerproject-bw.png', color: '../src/assets/images/hungerproject-reg.png', link: 'https://thp.org/'},
    { bw: '../src/assets/images/mec-bw.png', color: '../src/assets/images/mec-reg.png', link: 'https://mec.org.mw/'}

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