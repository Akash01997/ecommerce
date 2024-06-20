import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx'
import Product from './components/Product.jsx';

let Router = createBrowserRouter([
  {
   path : "/",
   element : <App></App>,
   children : [
    {
      path :"/cart",
      element :<Cart></Cart>
     },
     {
       path : "/about",
       element : <About></About>
     },
     {
      path : "/",
      element : <Home></Home>,
     },
     {
      path : "/product/:id",
      element : <Product></Product>
     },
     
   ],errorElement : <Error></Error>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={Router}></RouterProvider>
);
