import React, { useState, useEffect } from 'react';
import './slideshow.css';


const slides = [
  { id: 1, image: '../images/slide3.webp' },
  { id: 2, image: '../images/slide2.jpeg' },
  { id: 3, image: '../images/slide1.webp'},
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  });

  useEffect(() => {
    console.log('Current Slide:', currentSlide);
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
      <div className="slide-text">For all your stationery needs</div>
        </div>
    
  );
}

export default Slideshow;