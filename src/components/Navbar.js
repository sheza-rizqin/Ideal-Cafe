import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BsCartFill, BsMoon, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const IdealCafeNavbar = ({ onSearch }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <>
      <style>{`
      .nav-link {
       color: white !important;
       font-weight: 500;
       font-size: 0.9rem; /* Decreased font size */
        }
        :root {
          --deep-blue: #003366;
          --bright-red: #E5232C;
          --gold-yellow: #FDB813;
          --dark-gray: rgb(3, 15, 85);
        }

        body {
          background-color: ${darkMode ? '#121212' : '#f0f0f0'};
          color: ${darkMode ? '#f0f0f0' : '#1a1a1a'};
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .navbar-theme {
          background-color: var(--dark-gray) !important;
        }

        .navbar-brand {
          color: var(--gold-yellow) !important;
          font-weight: bold;
        }

        .nav-link {
          color: white !important;
          font-weight: 500;
        }

        .nav-link:hover {
          color: var(--bright-red) !important;
        }

        .form-control::placeholder {
          color: #bbb;
        }

        .btn-outline-primary {
          border-color: var(--gold-yellow);
          color: var(--gold-yellow);
        }

        .btn-outline-primary:hover {
          background-color: var(--gold-yellow);
          color: #000;
        }

        .btn-outline-success {
          border-color: var(--bright-red);
          color: var(--bright-red);
        }

        .btn-outline-success:hover {
          background-color: var(--bright-red);
          color: #fff;
        }

        .btn-outline-dark {
          color: #f0f0f0;
          border-color: #ccc;
        }

        .btn-outline-dark:hover {
          background-color: #f0f0f0;
          color: #121212;
        }
      `}</style>

      <Navbar expand="lg" className="navbar-theme shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/images/IdealCafe-logo.png"
              width="100"
              height="60"
              className="d-inline-block align-top me-2"
              alt="Ideal Cafe Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
              <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
              <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
              <Nav.Link as={Link} to="/game">Spin & Win</Nav.Link> 
            </Nav>

            <Form className="d-flex me-3" onSubmit={handleSearchSubmit}>
              <FormControl 
                type="search" 
                placeholder="Search ice cream..." 
                className="me-2" 
                value={searchQuery} 
                onChange={handleSearchChange} 
              />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>

            <Button variant="outline-primary" className="me-2" as={Link} to="/cart">
              <BsCartFill /> Cart
            </Button>

            <Button variant="outline-dark" onClick={toggleDarkMode} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <BsSun /> : <BsMoon />}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default IdealCafeNavbar;




