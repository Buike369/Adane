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
import Policy from "./components/policy"
import CookiePolicy from "./components/cookiePolicy"
import Terms from "./components/termsAndService"
import AllBlogs from "./components/allBlog"
import Career from "./components/career"
import FAQ from "./components/FAQ"
import BlogDetails from "./components/blogdetails"
import Text from "./components/textLink"
import Text1 from "./components/textD"
import Write from "./components/write"
import Apy from "./components/newBlog"
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
      },
       ,
      {
        path: "/apy",
        element: <Apy/>
      },
      {
        path: "/blogs",
        element: <AllBlogs />
      },
        {
        path: "/write",
        element: <Write />
      },
      {
        path: "/privacy_policy",
        element: <Policy />
      },
      
      {
        path: "/cookie_policy",
        element: <CookiePolicy />
      },
      {
        path: "/terms_and_condition",
        element: <Terms />
      },
      {
        path: "/career",
        element: <Career />
      },
      {
        path: "/blogDetails",
        element: <BlogDetails />
      }
      ,
      {
        path: "/blg",
        element: <Text />
      }
      ,
      {
        path: "/blog_news/:id",
        element: <Text1 />
      }
      ,
      {
        path: "/faq",
        element: <FAQ />
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
