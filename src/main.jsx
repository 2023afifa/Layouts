import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from "./Root/Root"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/nav",
        element: <Navbar></Navbar>,
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
