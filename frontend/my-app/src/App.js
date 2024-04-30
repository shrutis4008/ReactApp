import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div> 
       <Navbar/>
       <Home/>
       <Footer/>
       </div>
    },
    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/register",
      element: <Register/>,
    },

    {
      path: "/post",
      element: <SinglePost/>,
    },

    {
      path: "/create",
      element: <CreatePost/>,
    },

  ]);

  return (
    // <div>
    //   Hello World.
    // </div>
 
  <RouterProvider router={router} />
  );
}

export default App;
