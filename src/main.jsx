import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './components/About.jsx';

let Router = createBrowserRouter([
  {
   path : "/",
   element : <App></App>
  },
  {
    path : "/about",
    element : <About></About>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
