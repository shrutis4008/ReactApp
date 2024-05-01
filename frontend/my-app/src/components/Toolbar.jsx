import React from 'react'
import Button from 'react-bootstrap/Button';

const Toolbar = () => {

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
    <div className="toolbar">
        <h1>Related recipes</h1>

        {posts.map((post) => (
            <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <Button variant="outline-secondary" size="sm" >Read</Button>{' '}
            {/* <button>Read</button> */}


            </div>
        ))}
      
    </div>
  )
}

export default Toolbar
