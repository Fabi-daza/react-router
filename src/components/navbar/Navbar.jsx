import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className='text-decoration-none m-3 text-white'> 🏠 Home</Link>
            <Link to="/contact" className='text-decoration-none m-3 text-white'> 📒 Contacto</Link>
          </Nav>
          <Navbar.Brand href="#">Happy Cake 🍰</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu