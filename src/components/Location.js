import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const Location = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h2>Our Locations</h2>
          <p>We’re located in the heart of Mangalore! Visit us at:</p>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Ideal Café, Hampankatta, Mangalore</strong>
              <Button 
                variant="link" 
                href="https://goo.gl/maps/V3dPpa37VHD2" 
                target="_blank" 
                className="ms-2">
                View on Map
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Ideal Café, Lalbagh, Mangalore</strong>
              <Button 
                variant="link" 
                href="https://goo.gl/maps/L8h2gWgx7qq" 
                target="_blank" 
                className="ms-2">
                View on Map
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Location;

