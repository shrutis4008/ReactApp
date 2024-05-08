import React from "react";
import { Form as Forms, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

// baserurl/login
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("* Please enter username."),
  password: Yup.string().required("* Please enter a password."),
});
const Login = () => {
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   if (!e.target.value) {
  //     alert("enter both username and password.");
  //   }
  //   SetInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // console.log(inputs);

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    try {
      console.log("inputs: ", values);
      await axios.post("http://localhost:3001/api/auth/login/", values);
      navigate("http://localhost:3000/");
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
    <div classname="login display-flex">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        // onSubmit={(e, values) => {
        //   handleSubmit(e, values);
        // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <Forms onSumbit={handleSubmit}>
              <Forms.Group controlId="formBasicEmail">
                <Forms.Label>Username</Forms.Label>
                <Field
                  id="username"
                  className="username"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  style={{ marginBottom: "20px" }}
                  onChange={handleChange}
                  value={values.username}
                />
                <ErrorMessage name="username" component="div" />
              </Forms.Group>

              <Forms.Group controlId="formBasicPassword">
                <Forms.Label>Password</Forms.Label>
                <Field
                  id="password"
                  className="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                <ErrorMessage name="password" component="div" />
              </Forms.Group>
              <button
                className="button"
                variant="primary"
                style={{ marginTop: "20px", marginRight: "10px" }}
                type="submit"
                // onClick={(e) => {
                //   console.log("Working");
                //   e.preventDefault();

                // }
                // }
              >
                Login
              </button>
              {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

              <br></br>
              <p> </p>
              <span>
                New User? &nbsp;
                <Link
                  to="/register"
                  className="register"
                  variant="primary"
                  // type="submit"
                >
                  Register
                </Link>
              </span>
            </Forms>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
