import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container className="my-5">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <Form>
        {!isLogin && (
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>

        <div className="mt-3">
          {isLogin ? 'New user?' : 'Already have an account?'}{' '}
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AuthForm;
