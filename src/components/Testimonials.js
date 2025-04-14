import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const testimonials = [
  {
    name: "Asha",
    rating: 5,
    review: "The Gadbad Ice Cream is pure nostalgia!. I can’t visit Mangalore without having it at least once!",
  },
  {
    name: "Rahul",
    rating: 4,
    review: "The place has such a warm vibe. Definitely coming back.",
  },
  {
    name: "Sneha",
    rating: 5,
    review: "Honestly, the best ice cream I’ve ever had. Highly recommend the Tiramisu flavor !",
  },
  {
    name: "Arjun",
    rating: 4,
    review: "Came here on a friend's recommendation and was blown away! The sundaes are huge and delicious, and the staff is super friendly.",
  },
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <style>{`
        .testimonial-card {
          transition: transform 0.3s ease;
          border-radius: 16px;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .testimonial-stars {
          color: #FDB813;
          font-size: 1.2rem;
        }

        .dark-mode .testimonial-card {
          background-color: #2c2c2c;
          color: #f0f0f0;
        }
      `}</style>

      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {testimonials.map((t, idx) => (
          <Col md={6} key={idx} className="mb-4">
            <Card className="testimonial-card h-100">
              <Card.Body>
                <Card.Title>{t.name}</Card.Title>
                <Card.Text className="fst-italic">"{t.review}"</Card.Text>
                <div className="testimonial-stars">{"⭐".repeat(t.rating)}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
