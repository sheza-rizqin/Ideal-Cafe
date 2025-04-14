
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <Row>
        {cartItems.length === 0 ? (
          <Col>
            <p className="text-center">Your cart is empty!</p>
          </Col>
        ) : (
          cartItems.map((item, idx) => (
            <Col md={6} key={idx} className="mb-3">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>₹{item.price}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromCart(idx)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {cartItems.length > 0 && (
        <div className="text-end">
          <h4>Total: ₹{total}</h4>
        </div>
      )}
    </Container>
  );
};

export default Cart;


