import { useContext } from 'react'
import { ThemeContext } from '../App'
function HeroBanner() {
    const { theme } = useContext(ThemeContext)!
    return (
        <div className="content-container flex min-h-screen items-center justify-center">
            <div className="flex flex-col gap-2">
                <p className="outlined-text text-center text-5xl font-black uppercase text-transparent md:text-8xl lg:text-9xl">
                    {theme === 'light' ? '!Dark Mode' : 'Dark Mode'}
                </p>
                <h1 className="text-center text-5xl font-black uppercase md:text-8xl lg:text-9xl">
                    {theme === 'light' ? '!Dark Mode' : 'Dark Mode'}
                </h1>
                <p className="outlined-text text-center text-5xl font-black uppercase text-transparent md:text-8xl lg:text-9xl">
                    {theme === 'light' ? '!Dark Mode' : 'Dark Mode'}
                </p>
            </div>
        </div>
    )
}

export default HeroBanner
