import React from 'react'

import { Button, Navbar, Nav, Container } from 'react-bootstrap'


const NavigationBar = () => {
  return (
    <div className='NavigationBar'>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default NavigationBar
