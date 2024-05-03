import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div classname="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button className="button" variant="primary" type="submit">
          Submit
        </Button>

        <br></br>
        <p> </p>

        <Link
          to="/register"
          className="register"
          variant="primary"
          type="submit"
        >
          New User? Register Instead!
        </Link>
      </Form>
    </div>
  );
};

export default Login;
