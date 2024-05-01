import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer font-link">
      <Container fluid>
        <Row>
          <span>
            Made with ♥ and <b>React.js</b>.
          </span>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
