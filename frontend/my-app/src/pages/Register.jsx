import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, SetInputs] = useState({
    username: "",
    email: "",
    password: "",
  }

); 

const [err, setError] = useState(null)

  const handleChange = (e) => {
    SetInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("inputs: ", inputs);
      const res = await axios.post(
        "http://localhost:3001/api/auth/register/",
        inputs
      );
      console.log(res);
    } catch (err) {
      setError(err.response.data)
    }
  };
  return (
    <Form className="register">
      <Form.Group controlId="formBasicUserName">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
      {err && <p>This user is already registered. Please login.</p>}

      <p> </p>
      <span>
      Registered already? 
      </span> <Link to="/login" className="register" variant="primary" type="submit">
        Login.
      </Link>
    </Form>
  );
};

export default Register;
