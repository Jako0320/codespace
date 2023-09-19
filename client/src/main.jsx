import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPosts from './pages/UserPosts';
import Forum from './pages/Forum';
import Social from '../src/components/Social/Social';
import Home from '../src/components/Home/Home';
import Calendar from '../src/components/Calendar/Calendar';
import Donate from '../src/components/Donate/Donate';

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
      {
        path: '/forum',
        element: <Forum />
      }, 
      {
        path: '/calendar',
        element: <Calendar />
      }, 
      {
        path: '/social',
        element: <Social />
      },
      {
        path: '/donate',
        element: <Donate />
      }, {
        path: '/posthistory',
        element: <UserPosts />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)