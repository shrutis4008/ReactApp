import React from 'react'

import { Button, Navbar, Nav, Container } from 'react-bootstrap'


const NavigationBar = () => {
  return (
    <div className='NavigationBar font-link'>
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Login</Nav.Link>
            <Nav.Link href="">Write</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </div>
  )
}

export default NavigationBar
