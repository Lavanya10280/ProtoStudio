
// Slider.js

import React, { useState } from 'react';
import './Slider.css';

const foodImages = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
  'image8.jpg',
  'image9.jpg',
  
  'image14.jpg',
  'image15.jpg',
  'image16.jpg',
  'image17.jpg',
  'image18.jpg',
  'image19.jpg',
  'image20.jpg',
  // Add more images as needed
];

const imagesPerSet = 4;

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (foodImages.length * imagesPerSet));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (foodImages.length * imagesPerSet)) % (foodImages.length * imagesPerSet));
  };

  return (
    <div className="slider-container">
      <button onClick={prevImage}>&#9665;</button>
      <div className="slider">
        {foodImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={'food-${index}'}
            className={index === currentImageIndex % imagesPerSet ? 'slide-image active' : 'slide-image'}
          />
        ))}
      </div>
      <button onClick={nextImage}>&#9655;</button>
    </div>
  );
};

export default Slider;