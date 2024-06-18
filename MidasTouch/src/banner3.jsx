import { useState, useEffect } from "react";
import './assets/banner3.css'

const slides = [
    { id: 1, image: '../images/midas2-bw.jpeg' },
];
  
const Banner3 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(slideInterval);
    });
  
  
  
    return (
      
          <div className="slideshow3">
              {slides.map((slide, index) => (
              <div
              key={slide.id}
              className={`slide3 ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
        ))}
        <div className="slide-text3">Contact us</div>
          </div>
      
    );
};

export default Banner3;