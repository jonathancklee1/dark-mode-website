import { useContext } from 'react'
import Moon from './svg/Moon'
import Sun from './svg/Sun'
import { ThemeContext } from '../App'

function ThemeToggleButton() {
    const { theme, setTheme } = useContext(ThemeContext)
    function toggleTheme() {
        setTheme((prevTheme: string) =>
            prevTheme === 'light' ? 'dark' : 'light'
        )
    }

    return (
        <div
            className="right-12 h-9 w-16 cursor-pointer rounded-3xl bg-card-color md:absolute"
            onClick={toggleTheme}
        >
            <div className="relative">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 scale-90 [&>svg]:fill-white">
                    <Sun />
                </div>
                <div
                    className={`size-9 ${theme === 'dark' ? 'translate-x-0.5' : 'translate-x-7'} scale-[85%] rounded-full bg-white transition-transform duration-500 ease-in-out`}
                ></div>
                <div className="absolute right-2  top-1/2 -translate-y-1/2 scale-90 [&>svg]:fill-white">
                    <Moon />
                </div>
            </div>
        </div>
    )
}

export default ThemeToggleButton
