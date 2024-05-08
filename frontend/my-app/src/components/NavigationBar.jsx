import React from "react";

import { Button, Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="NavigationBar font-link">
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">EasyToCook</Navbar.Brand>
          <Nav className="me-auto ">
            {/* <Nav.Link href="">Home</Nav.Link> */}
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/post/create">Add your recipe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
