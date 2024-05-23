import React, { createContext, ReactNode } from 'react'

type ScrollContextType = {
    scrollToTop: () => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <ScrollContext.Provider value={{ scrollToTop }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollContext
