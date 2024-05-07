import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// baseurl/

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/post/allposts");
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home  font-link" id="react-app">
      <div className="posts">
        {posts &&
          posts.map((post) => (
            <div className="post" key={post._id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  to={`/post/single/${post._id}`}
                >
                  <Button variant="outline-dark" size="sm">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
