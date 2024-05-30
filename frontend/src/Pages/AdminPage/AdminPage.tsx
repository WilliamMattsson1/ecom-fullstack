import NotFoungPage from '../NotFoundPage/NotFoundPage'
import './AdminPage.css'
import { useEffect, useState } from 'react'
import logo from '../../assets/logo-admin.png'
import AdminAddForm from '../../Components/AdminAddForm/AdminAddForm'
import AdminEditProducts from '../../Components/AdminEditProducts/AdminEditProducts'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

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

    const [view, setView] = useState('add') // 'add' eller 'edit'

    const handleAddProduct = () => {
        setView('add')
    }

    const handleEditProducts = () => {
        setView('edit')
    }

    const getContentWidth = () => {
        return view === 'add' ? '85%' : '95%'
    }
    return (
        <>
            {isAdmin ? (
                <>
                    <div className="admin-nav">
                        <div className="admin-logo">
                            <img src={logo} alt="admin-logo" />
                        </div>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="admin-back">
                                <FontAwesomeIcon icon={faShop} />
                                <p>Store</p>
                            </div>
                        </Link>
                        <div className="admin-user">
                            <div className="admin-img-container">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8Mg%3D%3D"
                                    alt="face"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="admin-container">
                        <div className="admin-header-buttons-container">
                            <button onClick={handleAddProduct}>
                                Add Product
                            </button>
                            <button onClick={handleEditProducts}>
                                Edit Products
                            </button>
                        </div>
                        <div
                            className="admin-view-content"
                            style={{ width: getContentWidth() }}
                        >
                            {view === 'add' && <AdminAddForm />}
                            {view === 'edit' && <AdminEditProducts />}
                        </div>
                    </div>
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
