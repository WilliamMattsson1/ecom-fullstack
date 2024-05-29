import NotFoungPage from '../NotFoundPage/NotFoundPage'
import './AdminPage.css'
import { useEffect, useState } from 'react'

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    useEffect(() => {
        checkAdminStatus()
    }, [])
    const checkAdminStatus = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch('/checkadmin', {
                method: 'GET',
                headers: {
                    token: token as string
                }
            })
            const data = await response.json()
            setIsAdmin(data.isAdmin)
        } catch (error) {
            console.error('Error checking admin status:', error)
        }
    }
    return (
        <>
            {isAdmin ? (
                <>
                    <h1>Admin Page</h1>
                    <h1>Admin Page</h1>
                    <h1>Admin Page</h1>
                    <h1>Admin Page</h1>
                    <h1>Admin Page</h1>
                    <h1>Admin Page</h1>
                </>
            ) : (
                <>
                    <NotFoungPage />
                </>
            )}
        </>
    )
}

export default AdminPage
