import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import Hamburger from './svg/Hamburger'
import ThemeToggleButton from './ThemeToggleButton'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="fixed left-0 right-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-background-color shadow-2xl transition-all duration-500 ease-in">
                {/* Mobile */}
                <div className="content-container absolute top-0 z-50 flex w-full items-center justify-between bg-background-color py-10 transition-all duration-500 ease-in-out md:hidden">
                    <div
                        className="w-fit cursor-pointer [&>svg]:stroke-text-color"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Hamburger />
                    </div>
                    <ThemeToggleButton />
                </div>
                {/* Desktop */}
                <div className="absolute top-0 z-50 hidden w-full  bg-background-color py-8 text-2xl shadow-2xl md:block">
                    <ul className="mx-auto flex  max-w-[1000px] justify-between gap-10 px-12">
                        <li className="cursor-pointer">History </li>
                        <li className="cursor-pointer">Benefits</li>
                        <li className="cursor-pointer">Implementing</li>
                        <li className="cursor-pointer">Examples</li>
                    </ul>
                </div>
                <DropdownMenu isOpen={isOpen} />
            </div>
        </>
    )
}

export default Navbar
