import { createContext, useRef, useState } from 'react'
import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Benefits from './sections/Benefits'
import Gallery from './sections/Gallery'
import History from './sections/History'
import Implementation from './sections/Implementation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export const ThemeContext = createContext(null)
function App() {
    const [theme, setTheme] = useState('dark')
    const historyRef = useRef(null)
    const benefitsRef = useRef(null)
    const implementationRef = useRef(null)
    const galleryRef = useRef(null)
    const heroRef = useRef(null)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <main data-theme={theme}>
                <Navbar
                    refList={[
                        historyRef,
                        benefitsRef,
                        implementationRef,
                        galleryRef,
                    ]}
                />
                <HeroBanner ref={heroRef} />
                <History ref={historyRef} />
                <Benefits ref={benefitsRef} />
                <Implementation ref={implementationRef} />
                <Gallery ref={galleryRef} />
                <Footer />
                <ScrollToTop topElement={heroRef} />
            </main>
        </ThemeContext.Provider>
    )
}

export default App
