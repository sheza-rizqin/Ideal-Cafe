import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const RatingSystem = () => {
  const [rating, setRating] = useState(0);

  return (
    <Container className="my-5 text-center">
      <h4>Rate This Flavor</h4>
      {[1, 2, 3, 4, 5].map((star) => (
        <Button
          key={star}
          variant={star <= rating ? 'warning' : 'outline-secondary'}
          onClick={() => setRating(star)}
        >
          ⭐
        </Button>
      ))}
    </Container>
  );
};

export default RatingSystem;
