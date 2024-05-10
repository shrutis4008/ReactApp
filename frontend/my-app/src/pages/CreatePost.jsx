import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// baserurl/create
const accessToken = localStorage.getItem("accessToken");
const headers = {
  Authorization: `Bearer ${accessToken}`,
};
const CreatePost = () => {
  // const state = useLocation().state;
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && value) {
      axios
        .post("/post/create/", { title, description: value }, { headers })
        .then((res) => {
          alert("Post created!");
          navigate("/");
        });
    }
  };

  return (
    <div className="add">
      <div className="content">
        <Row>
          <Col>
            <Form.Control
              className="input"
              size="sm"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Row>
        <br></br>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="item">
          <h1 style={{ marginLeft: "30px" }}></h1>
          <Button
            className="button"
            onClick={handleSubmit}
            variant="primary"
            style={{ marginTop: "15px" }}
          >
            Create Post
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
