import { createContext, useState } from 'react'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Benefits from './sections/Benefits'
import Gallery from './sections/Gallery'
import History from './sections/History'
import Implementation from './sections/Implementation'

export const ThemeContext = createContext(null)
function App() {
    const [theme, setTheme] = useState('dark')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <main data-theme={theme}>
                <Navbar />
                <HeroBanner />
                <History />
                <Benefits />
                <Implementation />
                <Gallery />
            </main>
        </ThemeContext.Provider>
    )
}

export default App
