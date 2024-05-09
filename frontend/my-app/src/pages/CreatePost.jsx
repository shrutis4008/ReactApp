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

const createPost = () => {
  //   const state = useLocation().state;
  //   const [value, setValue] = useState(state?.title || "");
  //   const [title, setTitle] = useState(state?.desc || "");

  //   const navigate = useNavigate();

  //   const handleClick = async (e) => {
  //     e.preventDefault();

  //     try {
  //       state
  //         ? await axios.put(
  //             `https://react-blog-app-ixe0.onrender.com/api/post/create/${state.id}`,
  //             {
  //               title,
  //               desc: value,
  //             }
  //           )
  //         : await axios.post(`/posts/`, {
  //             title,
  //             desc: value,
  //             date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
  //           });
  //       navigate("/");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  // console.log(value);
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
              // onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Row>
        <br></br>
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            // value={value}
            // onChange={setValue}
          />
        </div>
      </div>

      <div className="item">
        <h1 style={{ marginLeft: "30px" }}></h1>
        <div className="m-3">
          <label className="mx-3"></label>
          <input className="d-none" type="file" />
          <Button variant="primary" size="sm">
            Create Post
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default createPost;
