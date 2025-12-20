import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/common/Layout'
import Home from './components/Home'
import Register from './components/user/Register'
import Login from './components/user/Login'
import RaiseRequest from './components/user/RaiseRequest'


const routes=createBrowserRouter([
    {
      path: "",
      element: <Layout/>,
      children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"register",
        element: <Register/>
      },
      {
        path:"login",
        element: <Login/>
      }
      ,
      {
        path:"raise-request",
        element: <RaiseRequest/>
      }
    ]
    }
])

function App() {

  

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
