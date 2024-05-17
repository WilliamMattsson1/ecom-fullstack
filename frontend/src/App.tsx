import './App.css'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api')
                const data = await response.json()
                alert(data.hello)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <>
            <h1>Test</h1>
        </>
    )
}

export default App
