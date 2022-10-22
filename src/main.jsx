import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import App from './App'
import './index.css'


const router=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
