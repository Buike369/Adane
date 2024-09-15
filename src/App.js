import React from "react"

import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./components/home"
import Login from "./components/login"
import Register from "./components/register"
import Cont from "./components/contact"
import ContUs from "./components/contactUs"
import AboutUs from "./components/about"
import Services from "./components/service"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Cont/>
      }, {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/getInTouch",
        element: <ContUs />
      }
      ,
      {
        path: "/service",
        element: <Services/>
      }
     
    ]
  },
  
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
