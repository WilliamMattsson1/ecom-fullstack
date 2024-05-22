import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'

import './index.css'
import AboutPage from './Pages/AboutPage/AboutPage.tsx'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.tsx'
import ProductsPage from './Pages/ProductsPage/ProductsPage.tsx'
import LoginPage from './Pages/LoginPage/LoginPage.tsx'
import CartPage from './Pages/CartPage/CartPage.tsx'
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetails.tsx'
import ContactPage from './Pages/ContactPage/ContactPage.tsx'
import GenderProducts from './Pages/GenderProducts/GenderProducts.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/products',
        element: <ProductsPage />
    },
    {
        path: '/products/men',
        element: <GenderProducts gender="men" />
    },
    {
        path: '/products/woman',
        element: <GenderProducts gender="woman" />
    },

    {
        path: '/products/:gender/:id',
        element: <ProductDetailsPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/cart',
        element: <CartPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
