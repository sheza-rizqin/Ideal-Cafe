import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Admin Dashboard (Mock)</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>New Item Name</Form.Label>
          <Form.Control type="text" placeholder="e.g., Mango Sundae" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="e.g., 150" />
        </Form.Group>
        <Button variant="success">Add Item</Button>
      </Form>
    </Container>
  );
};

export default AdminDashboard;
