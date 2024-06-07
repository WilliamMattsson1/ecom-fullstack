import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ScrollProvider } from './Context/ScrollContext.tsx'
import { ProductsProvider } from './Context/ProductsContext.tsx'
import App from './App.tsx'
import './index.css'
import AboutPage from './Pages/AboutPage/AboutPage.tsx'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.tsx'
import ProductsPage from './Pages/ProductsPage/ProductsPage.tsx'
import LoginPage from './Pages/LoginPage/LoginPage.tsx'
import CartPage from './Pages/CartPage/CartPage.tsx'
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage.tsx'
import ContactPage from './Pages/ContactPage/ContactPage.tsx'
import GenderProducts from './Pages/GenderProducts/GenderProducts.tsx'
import CartContextProvider from './Context/CartContext.tsx'
import AdminPage from './Pages/AdminPage/AdminPage.tsx'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.tsx'

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
        path: '/products/:gender/:productName',
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
        path: '/checkout',
        element: <CheckoutPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: '/admin',
        element: <AdminPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ProductsProvider>
            <CartContextProvider>
                <ScrollProvider>
                    <RouterProvider router={router} />
                </ScrollProvider>
            </CartContextProvider>
        </ProductsProvider>
    </React.StrictMode>
)
