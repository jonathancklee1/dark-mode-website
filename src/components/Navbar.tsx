import Hamburger from './svg/Hamburger'
function Navbar() {
    return (
        <div className="container sticky top-0 flex items-center justify-center text-2xl">
            {/* Mobile */}
            <div className="absolute top-10 w-full cursor-pointer px-6 md:hidden">
                <Hamburger />
            </div>
            {/* Desktop */}
            <div className="absolute top-10 hidden md:block">
                <ul className="flex justify-center gap-10">
                    <li className="cursor-pointer">History </li>
                    <li className="cursor-pointer">Benefits</li>
                    <li className="cursor-pointer">Implementing</li>
                    <li className="cursor-pointer">Examples</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
