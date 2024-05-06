import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "react-bootstrap/Button";

// baserurl/create

const CreatePost = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
  };
  // console.log(value);
  return (
    <div className="add">
      <div className="content">
        <Row>
          {/* <Form.Label column="sm" lg={2}>
          Title
        </Form.Label> */}
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
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <div className="m-3">
          <label className="mx-3">Upload image here: </label>
          <input className="d-none" type="file" />
          <Button variant="outline-dark" size="sm" onClick={handleClick}>
            Upload
          </Button>{" "}
        </div>
      </div>

      <div className="item">
        <h1 style={{ marginLeft: "30px" }}></h1>
        <div className="m-3">
          <label className="mx-3"></label>
          <input className="d-none" type="file" />
          <Button variant="primary" size="sm" onClick={handleClick}>
            Create Post
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
