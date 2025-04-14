import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, Accordion, FormControl } from 'react-bootstrap';

const items = [
  { name: 'Gadbad Ice Cream', category: 'Special Ice Creams', price: 157, rating: 5 },
  { name: 'Tiramisu', category: 'Special Ice Creams', price: 140, rating: 5 },
  { name: 'Chocolate Dad', category: 'Special Ice Creams', price: 135, rating: 4 },
  { name: 'Parfait', category: 'Special Ice Creams', price: 150, rating: 4 },
  { name: 'Dilkush', category: 'Special Ice Creams', price: 120, rating: 3 },
  { name: 'Chocolate Choconut', category: 'Special Ice Creams', price: 145, rating: 5 },
  { name: 'Dry Fruit Cocktail', category: 'Special Ice Creams', price: 155, rating: 5 },
  { name: 'Bambino', category: 'Special Ice Creams', price: 130, rating: 4 },
  { name: 'Chikku Milkshake', category: 'Beverages', price: 90, rating: 4 },
  { name: 'Strawberry Milkshake', category: 'Beverages', price: 95, rating: 4 },
  { name: 'Mango Milkshake', category: 'Beverages', price: 100, rating: 5 },
  { name: 'Falooda', category: 'Beverages', price: 110, rating: 5 },
  { name: 'Cold Coffee', category: 'Beverages', price: 105, rating: 4 },
  { name: 'Pista Milkshake', category: 'Beverages', price: 100, rating: 4 },
  { name: 'Orange Juice', category: 'Beverages', price: 90, rating: 4 },
  { name: 'Pineapple Juice', category: 'Beverages', price: 95, rating: 4 },
  { name: 'Jackfruit Milkshake', category: 'Beverages', price: 110, rating: 5 },
  { name: 'Chocolate Milkshake', category: 'Beverages', price: 105, rating: 4 },
  { name: 'Almond Milkshake', category: 'Beverages', price: 115, rating: 5 },
  { name: 'Vanilla Milkshake', category: 'Beverages', price: 90, rating: 3 },
  { name: 'Burger', category: 'Snacks', price: 85, rating: 4 },
  { name: 'Double Decker Sandwich', category: 'Snacks', price: 95, rating: 5 },
  { name: 'Schezwan Sandwich', category: 'Snacks', price: 90, rating: 4 },
  { name: 'Pav Bhaji', category: 'Snacks', price: 75, rating: 4 },
  { name: 'Samosa Chat', category: 'Snacks', price: 70, rating: 3 },
  { name: 'Gobi Manchurian', category: 'Snacks', price: 80, rating: 4 },
  { name: 'Channa Batura', category: 'Snacks', price: 100, rating: 5 },
  { name: 'Masala Dosa', category: 'Snacks', price: 95, rating: 4 },
];

const Menu = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = filter === 'All' ? items : items.filter(i => i.category === filter);
  
  const searchedItems = filtered.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...searchedItems].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const categories = ['Special Ice Creams', 'Beverages', 'Snacks'];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Menu</h2>
      <div className="mb-4">
        <FormControl 
          type="text" 
          placeholder="Search for items..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>

      <div className="d-flex justify-content-between mb-4">
        <Dropdown>
          <Dropdown.Toggle variant="secondary">Filter</Dropdown.Toggle>
          <Dropdown.Menu>
            {['All', ...categories].map(cat => (
              <Dropdown.Item key={cat} onClick={() => setFilter(cat)}>
                {cat}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary">Sort</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortBy('price')}>Price</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy('rating')}>Rating</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Accordion defaultActiveKey="0">
        {categories.map((category, idx) => {
          const categoryItems = sorted.filter(item => item.category === category);

          return (
            categoryItems.length > 0 && (
              <Accordion.Item eventKey={String(idx)} key={idx}>
                <Accordion.Header>{category}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    {categoryItems.map((item, itemIdx) => (
                      <Col md={6} lg={4} key={itemIdx} className="mb-4">
                        <Card className="shadow-sm h-100 border-0 bg-body-secondary text-body">
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>₹{item.price}</Card.Text>
                            <Card.Text>{"⭐".repeat(item.rating)}</Card.Text>
                            <Button variant="success" onClick={() => addToCart(item)}>Add to Cart</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            )
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Menu;





