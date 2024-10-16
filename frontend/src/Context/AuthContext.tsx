import { createContext, useState, useEffect, ReactNode } from 'react'

interface AuthContextType {
    isLoggedIn: boolean
    isAdmin: boolean
    checkAdminStatus: () => void
    handleLogout: () => void
}

const defaultAuthContext: AuthContextType = {
    isLoggedIn: false,
    isAdmin: false,
    checkAdminStatus: () => {},
    handleLogout: () => {}
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        localStorage.getItem('token') ? true : false
    )
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token') ? true : false)
        if (isLoggedIn) {
            checkAdminStatus()
        }
        console.log(
            'Här körs useEffect i AuthProvider, isLoggedIn:',
            isLoggedIn
        )
    }, [isLoggedIn])

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

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        setIsAdmin(false)
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, isAdmin, checkAdminStatus, handleLogout }}
        >
            {children}
        </AuthContext.Provider>
    )
}
