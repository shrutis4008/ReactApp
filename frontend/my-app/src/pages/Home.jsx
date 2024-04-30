import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Home = () => {

  const posts =[
    {
      id: 1, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "frontend/my-app/image/pexels-ash-122861-376464.jpg"
      
    },

    {
      id: 2, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "frontend/my-app/image/pexels-fotios-photos-1279330.jpg"
      
    },

    {
      id: 1, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "frontend/my-app/image/pexels-ash-122861-376464.jpg"
      
    },

    {
      id: 1, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "frontend/my-app/image/pexels-ash-122861-376464.jpg"
      
    }
  ]

  return (
    <div className="home">
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="img">
            <img src={`../upload/${post.img}`} alt="" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{getText(post.desc)}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Home
