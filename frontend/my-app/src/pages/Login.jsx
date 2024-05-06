import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// baserurl/login

const Login = () => {
  const [inputs, SetInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log("inputs: ", inputs);
      await axios.post("/auth/login", inputs);
      // navigate("http://localhost:3000/");
    } catch (err) {
      console.log(err);
    }
  };

  // setErrors(Validation(inputs));
  // if(errors.username === "" && errors.password == ""){
  //   axios.post("http://localhost:3001/api/auth/login", inputs)
  //           .then(res=> {
  //             navigate("http://localhost:3000/");
  //           }).catch(err => console.log(err));

  //       }
  // }

  return (
    <div classname="login">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="email"
            type="text"
            placeholder="Enter username"
            name="password"
            style={{ marginBottom: "20px" }}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
        <Button
          onClick={handleSubmit}
          className="button"
          variant="primary"
          type="submit"
          style={{ marginTop: "20px", marginRight: "10px" }}
        >
          Login
        </Button>
        {err && <p>{err}</p>}

        <br></br>
        <p> </p>
        <span>
          New User? &nbsp;
          <Link
            to="/register"
            className="register"
            variant="primary"
            type="submit"
          >
            Register
          </Link>
        </span>
      </Form>
    </div>
  );
};

export default Login;
