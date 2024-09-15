import React, { useState } from 'react';
import './Header.css';
import background from './images/hero.png';
import Background from './images/text.jpg';

const Header = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (imageName) => {
    setActiveImage(prev => prev === imageName ? null : imageName);
  };

  return (
    <div className='header-images'>
      <div
        className={`header-image-container ${activeImage === 'hero' ? 'active' : ''}`}
        onClick={() => handleImageClick('hero')}
      >
        <img src={background} alt='Hero' />
        <div className={`overlay ${activeImage === 'hero' ? 'show' : ''}`}>
        <h1>Welcome to SWADIFY</h1>
        <p>Explore our amazing FOOD!</p>
        </div>
      </div>
      <div
        className={`header-image-container ${activeImage === 'text' ? 'active' : ''}`}
        onClick={() => handleImageClick('text')}
      >
        <img src={Background} alt='Text'  />
        <div className={`overlay ${activeImage === 'text' ? 'show' : ''}`}>
        <h1>Special Offers</h1>
        <p>Don't miss out on exclusive deals!</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
