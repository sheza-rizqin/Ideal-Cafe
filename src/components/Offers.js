import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const offers = [
  {
    title: "Happy Hours",
    description: "Buy one get one free every day from 3 PM to 5 PM!",
  },
  {
    title: "Summer Special",
    description: "Get 20% off on all mango and jackfruit flavors!",
  },
  {
    title: "Free Delivery",
    description: "Enjoy free delivery on all orders above ₹199!",
  },
  {
    title: "Bank Card Offers",
    description: "Get 10% off with HDFC, ICICI, or SBI credit cards on weekends!",
  },
  {
    title: "Festive Bundle",
    description: "Get a family-size Ice-cream container + 2 milkshakes at ₹299 only!",
  },
  {
    title: "Student Discount",
    description: "Show your student ID and get 15% off your bill!",
  },
];

const Offers = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🎉 Exclusive Offers</h2>
      <Row>
        {offers.map((offer, idx) => (
          <Col md={6} lg={4} key={idx} className="mb-4">
            <Card className="h-100 shadow-sm border-0 rounded-4 bg-light">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold text-primary mb-2">{offer.title}</Card.Title>
                <Card.Text className="flex-grow-1">{offer.description}</Card.Text>
                <div className="mt-3 text-muted text-end">
                  <small>Limited time offer</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;


