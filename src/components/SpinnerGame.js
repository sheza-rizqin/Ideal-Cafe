import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const prizes = ['10% OFF', 'Free Ice Cream', 'Try Again', '20% OFF'];

const SpinnerGame = () => {
  const [result, setResult] = useState('');

  const spinWheel = () => {
    const random = Math.floor(Math.random() * prizes.length);
    setResult(prizes[random]);
  };

  return (
    <Container className="my-5 text-center">
      <h3>Spin the Wheel</h3>
      <Button variant="danger" onClick={spinWheel}>Spin</Button>
      {result && <h4 className="mt-3">You got: {result}</h4>}
    </Container>
  );
};

export default SpinnerGame;
