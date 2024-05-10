import HeroBanner from './components/HeroBanner'
import Navbar from './components/Navbar'
import Benefits from './sections/Benefits'
import Gallery from './sections/Gallery'
import History from './sections/History'
import Implementation from './sections/Implementation'

function App() {
    return (
        <main>
            <Navbar />
            <HeroBanner />
            <History />
            <Benefits />
            <Implementation />
            <Gallery />
        </main>
    )
}

export default App
