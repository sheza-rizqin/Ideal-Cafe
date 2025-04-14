import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CheckoutForm = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Checkout</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Delivery Option</Form.Label>
          <Form.Select>
            <option>Dine In</option>
            <option>Takeaway</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
