import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const HeroCarousel = () => {
  const items = [
    { name: 'Gadbad Ice Cream', image: 'images/gudbud.avif' },
    { name: 'Dilkush', image: 'images/dilkush.jpg' },
    { name: 'Chocolate Dad', image: 'images/choco-dad.jpg' },
    { name: 'Gobi Manchurian', image: 'images/gobi.jpg' },
    { name: 'Tiramisu', image: 'images/tiramisu.avif' },
    { name: 'Masala Dosa', image: 'images/dosa.jpg' },
    { name: 'Dry Fruit Cocktail', image: 'images/dry-fruit-cocktail.jpg' },
    { name: 'Falooda', image: 'images/falooda.jpg' },
  ];

  const carouselContainerStyle = {
    background: 'linear-gradient(to right,rgb(76, 30, 30),rgb(132, 32, 42))', 
    padding: '60px 0', 
    marginTop: '25px',  
  };

  const carouselItemsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    padding: '20px',
  };

  const carouselItemImgStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    width: '250px',  
    height: '250px',  
  };

  const itemNameStyle = {
    marginTop: '10px',
    fontSize: '16px', 
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <Container fluid style={carouselContainerStyle} className="p-0">
      <Carousel controls={false} interval={3000}>
        <Carousel.Item>
          <div style={carouselItemsStyle}>
            {items.slice(0, 4).map((item, index) => (
              <div 
                key={index} 
                style={carouselItemImgStyle} 
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} 
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img className="d-block" src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <p style={itemNameStyle}>{item.name}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={carouselItemsStyle}>
            {items.slice(4).map((item, index) => (
              <div 
                key={index} 
                style={carouselItemImgStyle} 
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} 
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <img className="d-block" src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <p style={itemNameStyle}>{item.name}</p>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HeroCarousel;



