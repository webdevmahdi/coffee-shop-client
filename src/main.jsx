import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './copmonents/AddCoffee.jsx';
import UpdateCoffee from './copmonents/UpdateCoffee.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/addcoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updatecoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
