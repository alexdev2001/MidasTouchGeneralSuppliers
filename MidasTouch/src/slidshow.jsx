import React, { useState, useEffect } from 'react';
import './assets/slideshow.css';


const slides = [
  { id: 1, image: '../src/assets/images/midas2-reg.jpeg' },
  { id: 2, image: '../src/assets/images/background_1.jpg' },
  { id: 3, image: '../src/assets/images/background_2.jpg' },
  { id: 4, image: '../src/assets/images/background_3.jpg' },
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