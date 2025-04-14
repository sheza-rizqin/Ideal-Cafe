import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={12}>
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out to us!</p>
          <ListGroup variant="flush">
            <ListGroup.Item>Email: <a href="mailto:support@idealcafe.com">support@idealcafe.com</a></ListGroup.Item>
            <ListGroup.Item>Phone: <a href="tel:+919876543210">+91 98765 43210</a></ListGroup.Item>
            <ListGroup.Item>Instagram: <a href="https://instagram.com/idealcafe" target="_blank" rel="noopener noreferrer">@idealcafe</a></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;


