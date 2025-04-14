import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const preferences = {
  chocolate: 'Choco Lava',
  fruity: 'Strawberry Swirl',
  nutty: 'Crunchy Almond Delight',
};

const FlavorRecommendation = () => {
  const [recommendation, setRecommendation] = useState('');

  const handleRecommend = (type) => {
    setRecommendation(preferences[type]);
  };

  return (
    <Container className="my-5 text-center">
      <h4>Flavor Recommendation</h4>
      <div className="mb-3">
        <Button variant="primary" onClick={() => handleRecommend('chocolate')} className="me-2">
          Chocolate Lover
        </Button>
        <Button variant="success" onClick={() => handleRecommend('fruity')} className="me-2">
          Fruity Fan
        </Button>
        <Button variant="warning" onClick={() => handleRecommend('nutty')}>
          Nutty Craver
        </Button>
      </div>
      {recommendation && <h5>We recommend: {recommendation}</h5>}
    </Container>
  );
};

export default FlavorRecommendation;
