import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Nav } from './pages/nav'
import { Story } from './pages/story'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/story/:id",
    element: <Story />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav></Nav>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
