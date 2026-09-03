import { createBrowserRouter, Navigate } from 'react-router-dom'
import NotFound404 from '../pages/NotFound404'
import RootLayout from '../layouts/RootLayout'
import Category from '../pages/Category'
import Products from '../pages/Products'
import Wishlist from '../pages/Wishlist'
import Home from '../pages/Home'
import CategoriesLayout from '../layouts/CategoriesLayout'
import ProductDetails from '../pages/ProductsDetails'
import Cart from '../pages/Cart' 
import Checkout from '../pages/Checkout' 
import Login from '../pages/auth/Login' 
import Register from '../pages/auth/Register'
import Profile from "../pages/auth/Profile";  


export const MainRouter = createBrowserRouter([
    { path: "*", element: <Navigate to="/404" /> },
    { path: "/404", element: <NotFound404 /> },

    {
        path: "/",
        element: <RootLayout/>,
            children: [
            {index: true, element: <Home />},
            {path: "/wishlist", element: <Wishlist/>},
            { path: "/cart", element: <Cart /> }, 
            { path: "/checkout", element: <Checkout /> }, 
            { path: "/login", element: <Login /> }, 
            { path: "/register", element: <Register /> }, 
            { path: "/profile", element: <Profile /> }, 
            {path: "/products/:id", element: <ProductDetails/>},

            {
                path: "/products",
                element: <CategoriesLayout />,
                children:[
                     { index: true, element: <Products/>},
                     {path: "category/:slug", element: <Category/>},

                ]
            }
            ]
    }

    ]
)
