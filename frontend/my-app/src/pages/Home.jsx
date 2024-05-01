import React from 'react'
import { Link, useLocation } from "react-router-dom";

const Home = () => {

  const posts =[
    {
      id: 1, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=800",
      
    },

    {
      id: 2, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
      
    },

    {
      id: 1, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800",
      
    },

    {
      id: 1, 
      title: "What is Lorem Ipsum?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      img: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800",
      
    }
    
  ]

  return (
    <div className="home font-link">
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt="" />
            
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button>   Read More   </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Home
