import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'

import './index.css'
import AboutPage from './Pages/AboutPage/AboutPage.tsx'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
