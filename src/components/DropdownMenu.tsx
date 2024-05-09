function DropdownMenu({ isOpen }) {
    return (
        <div
            className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} absolute top-[var(--header-height)] z-40 w-full rounded-b-3xl bg-background-color p-6 shadow-2xl transition-transform duration-500 ease-in-out md:hidden`}
        >
            <ul className="flex flex-col gap-4">
                <li className="cursor-pointer list-inside list-disc">
                    History
                </li>
                <li className="cursor-pointer list-inside list-disc">
                    Benefits
                </li>
                <li className="cursor-pointer list-inside list-disc">
                    Implementing
                </li>
                <li className="cursor-pointer list-inside list-disc">
                    Examples
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu
