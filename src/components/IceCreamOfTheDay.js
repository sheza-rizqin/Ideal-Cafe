import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const flavors = ['Gadbad', 'Mango Delight', 'Choco Lava', 'Strawberry Swirl'];

const IceCreamOfTheDay = () => {
  const [flavor, setFlavor] = useState('');

  useEffect(() => {
    const index = new Date().getDate() % flavors.length;
    setFlavor(flavors[index]);
  }, []);

  return (
    <Container className="my-5">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        .icecream-card {
          background: linear-gradient(135deg, #fff8f2, #ffe5d9);
          border: 2px solid #FDB813;
          border-radius: 1.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .flavor-text {
          font-family: 'Pacifico', cursive;
          font-size: 2.2rem;
          color: #E5232C;
          margin-top: 0.5rem;
        }

        .flavor-heading {
          font-weight: bold;
          font-size: 1.4rem;
          color: #003366;
        }
      `}</style>

      <Card className="text-center icecream-card p-4">
        <Card.Body>
          <div className="flavor-heading">Ice Cream of the Day</div>
          <div className="flavor-text">{flavor}</div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default IceCreamOfTheDay;

