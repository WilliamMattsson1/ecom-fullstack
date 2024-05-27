import { createContext } from 'react'

type ScrollContextType = {
    scrollToTop: () => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

type ScrollProviderProps = {
    children: React.ReactNode
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
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
