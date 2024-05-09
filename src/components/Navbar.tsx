import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import Hamburger from './svg/Hamburger'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="relative top-0 flex flex-col items-center justify-center shadow-2xl">
                {/* Mobile */}
                <div className="content-container absolute top-0 z-50 w-full bg-background-color py-10 md:hidden ">
                    <div
                        className="w-fit cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Hamburger />
                    </div>
                </div>
                {/* Desktop */}
                <div className="absolute top-0 hidden w-full py-10 text-2xl shadow-2xl md:block">
                    <ul className="flex justify-center gap-10">
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
