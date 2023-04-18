import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home';
import About from './Page/About';
import LogIn from './Page/LogIn';
import AuthProviders from './FIrebase/AuthProviders';
import Register from './Page/Register';





const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },{
          path:'/about',
          element: <About/>

      },{
        path: '/login',
        element: <LogIn/>
      }
      ,{
        path: '/register',
        element: <Register/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
