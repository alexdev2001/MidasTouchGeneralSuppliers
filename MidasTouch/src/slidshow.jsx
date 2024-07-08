import React, { useState, useEffect } from 'react';
import './assets/slideshow.css';
import slide1 from '../src/assets/images/midas2-reg.jpeg';
import slide2 from '../src/assets/images/background_1.jpg';
import slide3 from '../src/assets/images/background_2.jpg';
import slide4 from '../src/assets/images/background_3.jpg';


const slides = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
  { id: 4, image: slide4 },
];

const Slideshow = () => {
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
      <div className="slide-text">Supplying Success with Every Touch</div>
        </div>
    
  );
}

export default Slideshow;