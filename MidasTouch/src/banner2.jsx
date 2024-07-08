import { useState, useEffect } from "react";
import './assets/banner2.css'
import services from '../src/assets/images/services_banner.jpg'

const slides = [
    { id: 1, image: services },
];
  
const Banner2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(slideInterval);
    });
  
  
  
    return (
      
          <div className="slideshow2">
              {slides.map((slide, index) => (
              <div
              key={slide.id}
              className={`slide2 ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
        ))}
        <div className="slide-text2">Services</div>
          </div>
      
    );
};

export default Banner2;
  