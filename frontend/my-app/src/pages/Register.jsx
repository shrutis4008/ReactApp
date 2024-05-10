import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// baserurl/register

const Register = () => {
  const [inputs, SetInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log("inputs: ", inputs);
      await axios.post(
        "https://react-blog-app-ixe0.onrender.com/api/auth/register/",
        inputs
      );
      alert("user registered");
      navigate("/login");
    } catch (err) {
      console.log(err);
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
          style={{ marginBottom: "10px" }}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          style={{ marginBottom: "10px" }}
          onChange={handleChange}
        />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          style={{ marginBottom: "10px" }}
          onChange={handleChange}
        />
      </Form.Group>
      <div>
        {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="submit"
          style={{ marginTop: "20px", marginRight: "10px" }}
        >
          Submit
        </Button>
        {err && <p>{err}</p>}
        <br></br>
        <p> </p>
        <span>Registered already?</span>{" "}
        <Link to="/login" className="register" variant="primary" type="submit">
          Login
        </Link>
      </div>
    </Form>
  );
};

export default Register;
