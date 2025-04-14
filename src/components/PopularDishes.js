import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const dishes = [
  {
    name: 'Gadbad Ice Cream',
    image: 'images/gudbud.avif',
    description: 'A mix of nuts, jelly, and ice cream stacked to perfection!',
  },
  {
    name: 'Tiramiu',
    image: 'images/tiramisu.avif',
    description: 'A heavenly blend of creamy vanilla, rich chocolate, and aromatic Irish coffee flavors.',
  },
  {
    name: 'Parfait',
    image: 'images/parfait-icecream.jpeg',
    description: 'A dreamy dessert crafted to impress. Layered with creamy ice cream, crunchy nuts, juicy seasonal fruits.',
  },
];

const PopularDishes = () => {
  return (
    <Container className="my-5">
      <style>{`
        .dish-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 15px;
        }

        .dish-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .dark-mode .dish-card {
          background-color: #2c2c2c;
          color: #f0f0f0;
        }

        .dark-mode .dish-card .btn-primary {
          background-color: #FDB813;
          border: none;
          color: #000;
        }

        .dark-mode .dish-card .btn-primary:hover {
          background-color: #e0a800;
        }

        .dish-card .btn-primary {
          background-color: #003366;
          border: none;
        }

        .dish-card .btn-primary:hover {
          background-color: #00509e;
        }
      `}</style>

      <h2 className="text-center mb-4">Popular Dishes</h2>
      <Row>
        {dishes.map((dish, idx) => (
          <Col md={6} lg={4} className="mb-4" key={idx}>
            <Card className="dish-card h-100">
              <Card.Img
                variant="top"
                src={dish.image}
                onError={(e) => (e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable')}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>{dish.description}</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary">Order Now</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularDishes;

