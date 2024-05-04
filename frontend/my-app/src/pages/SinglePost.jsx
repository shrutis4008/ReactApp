import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/bin.png";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import {useState} from "react"
import {useEffect} from "react"
import moment from "moment"


const SinglePost = () => {

  const Home = () => {

    const [post,setPost] = useState({})

    const location = useLocation()

    const postId = location.pathname.split("/")[2]

    const {currentUser} = useContext(AuthContext)
  
    useEffect(()=> {
      const fetchData = async () =>{
        try{
          const res = await axios.get(`/post/${postId}`);
          setPosts(res.data);
        } catch (err){
          console.log(err);
        }
      };
  
      fetchData();
  
    },[postId])

  return (
    <div className="singlePost font-link">
      <div className="content">
        {/* <img
          src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        /> */}
         <div className="user">
          {/* <img
            src="https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />  */}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow}</p>
          </div>
          {currentUser.username === post.username && 
          (<div className="edit">
            <Link to={`/create?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>)}
        </div>
        <h1>{post.title}Lorem ipsum dolor sit amet.</h1>
      
          {post.description}
        
      </div>
      <Toolbar />
    </div>
  );
};
}
export default SinglePost;
