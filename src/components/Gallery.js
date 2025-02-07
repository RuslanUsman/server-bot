// src/components/Gallery.js
import React from 'react';

const Gallery = () => {
  return (
    <div>
      <h1>Галерея</h1>
      <div className="gallery-container">
        <img src="/images/image1.jpg" alt="Screenshot 1" />
        <img src="/images/image2.jpg" alt="Screenshot 2" />
        <img src="/images/image3.jpg" alt="Screenshot 3" />
      </div>
    </div>
  );
};

export default Gallery;
