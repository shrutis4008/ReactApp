import React from 'react'

const SinglePost = () => {
  return (
    <div className="singlePost font-link">
    <div className="content">
      <img src='https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
      <div className="user">
        <img
          src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="info">
          <span>John Doe</span>
          <p>Posted 2 days ago</p>
        </div>
      </div>
         </div>
  
  </div>
);
};


export default SinglePost
