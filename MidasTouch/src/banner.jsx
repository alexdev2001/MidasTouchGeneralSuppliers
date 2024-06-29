import { useState, useEffect } from "react";
import './assets/banner.css'

const slides = [
    { id: 1, image: '../images/about_us_banner3.jpg' },
];
  
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(slideInterval);
    });
  
  
  
    return (
      
          <div className="slideshow">
              {slides.map((slide, index) => (
              <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
        ))}
        <div className="slide-text">About us</div>
          </div>
      
    );
};

export default Banner;
  