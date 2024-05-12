import { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import Hamburger from './svg/Hamburger'
import ThemeToggleButton from './ThemeToggleButton'
function Navbar({ refList }) {
    const [isOpen, setIsOpen] = useState(false)
    function smoothScrollTo(target) {
        if (target) {
            target.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <>
            <div className="transition-color fixed left-0 right-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-background-color shadow-2xl">
                {/* Mobile */}
                <div className="content-container absolute top-0 z-50 flex w-full items-center justify-between bg-background-color py-6 transition-all duration-500 ease-in-out md:hidden">
                    <div
                        className="w-fit cursor-pointer [&>svg]:stroke-text-color"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Hamburger />
                    </div>
                    <ThemeToggleButton />
                </div>
                {/* Desktop */}
                <nav className="absolute top-0 z-50 hidden w-full bg-background-color px-12 py-8 text-xl text-text-color shadow-2xl transition-all duration-500 ease-in-out md:flex">
                    <ul className="mx-auto flex max-w-[1000px] justify-between gap-6 font-black lg:gap-10 lg:px-12">
                        <li className="cursor-pointer">
                            <button onClick={() => smoothScrollTo(refList[0])}>
                                History
                            </button>
                        </li>
                        <li className="cursor-pointer">
                            <button onClick={() => smoothScrollTo(refList[1])}>
                                Benefits
                            </button>
                        </li>
                        <li className="cursor-pointer">
                            <button onClick={() => smoothScrollTo(refList[2])}>
                                Implementing
                            </button>
                        </li>
                        <li className="cursor-pointer">
                            <button onClick={() => smoothScrollTo(refList[3])}>
                                Examples
                            </button>
                        </li>
                    </ul>
                    <ThemeToggleButton />
                </nav>
                <DropdownMenu
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    refList={refList}
                    smoothScrollTo={smoothScrollTo}
                />
            </div>
        </>
    )
}

export default Navbar
