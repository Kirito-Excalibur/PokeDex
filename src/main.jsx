import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import App from './App'
import './index.css'


const router=createBrowserRouter([
    {
        path: "/",
        element:(
            <div>
             <h1>Life is wierd</h1>   
             <Link to="poke">About Us</Link>
            </div>
        ),
    },
    {
        path: "/poke",
        element:<App/>,
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
