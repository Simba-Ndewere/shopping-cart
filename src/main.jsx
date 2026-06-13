import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shop from './shop/Shop.jsx';
import Home from './home/home.jsx';
import Cart from './cart/Cart.jsx';

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home /> },
      {path: "home", element: <Home/>},
      {path: "shop", element: <Shop/>},
      {path: "cart", element: <Cart/>},
    ]
  },
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
