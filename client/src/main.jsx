import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from '../src/components/Post/Post';
// import Forum from '../src/components/Forum/Forum';
import Social from '../src/components/Social/Social'
import Home from '../src/components/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,    
    children: [
      {
        index: true, 
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, 
      // {
      //   path: '/forum',
      //   element: <Forum />
      // }, 
      // {
      //   path: '/calendar',
      //   element: <Calendar />
      // }, 
      {
        path: '/social',
        element: <Social />
      }, {
        path: '/post',
        element: <Post />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)