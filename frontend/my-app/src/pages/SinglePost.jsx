import React from "react";
import Edit from "../assets/images/edit.png";
import Delete from "../assets/images/bin.png";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

// baseurl/post

const SinglePost = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  // const navigate = useNavigate();

  const postId = location.pathname.split("/")[3];
  // console.log(postId);

  // const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/post/single/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postId]);

  //   const handleDelete = async ()=> {
  //     try{
  //       await axios.delete(`/post/${postId}`);
  //       navigate("/")
  //       } catch (err){
  //       console.log(err);
  //     }

  //   }

  //   }

  return (
    <div className="singlePost font-link">
      <div className="content">
        <div className="user">
          <div className="info">
            <span>{post.username}</span>
            <p>{moment(post.date).fromNow}</p>
          </div>
          {/* {currentUser.username === post.username &&  */}
          <div className="edit">
            <Link to={`/post/edit/${postId}`}>
              <Button variant="dark">Edit</Button>
            </Link>
          </div>
          <div>
            <Link to={`/post/delete/${postId}`}>
              <Button variant="dark">Delete</Button>
            </Link>
          </div>
        </div>
        <h1>{post.title}</h1>
        {post.description}
      </div>
      {/* <Toolbar /> */}
    </div>
  );
};

export default SinglePost;
