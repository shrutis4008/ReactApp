import logo from './logo.svg';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import CreatePost from "./pages/CreatePost";

const Layout = ()=>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )

}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [

     
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/create",
        element: <CreatePost/>,
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
    ]
  
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
 <div className='App'>
  <div className='Container'>
  <RouterProvider router={router} />
  </div>
  </div>
  );
}



export default App;
