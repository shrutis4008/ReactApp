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
      path: "about",
      element: <div>About</div>,
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
