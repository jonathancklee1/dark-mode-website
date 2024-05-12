interface DropdownMenuProps {
    isOpen: boolean
}

function DropdownMenu({
    isOpen,
    setIsOpen,
    refList,
    smoothScrollTo,
}: DropdownMenuProps) {
    return (
        <div
            className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} absolute top-[var(--header-height)] z-40 w-full rounded-b-3xl bg-background-color p-6 shadow-2xl transition-transform duration-500 ease-in-out md:hidden`}
        >
            <ul className="flex flex-col gap-4 font-bold">
                <li className="cursor-pointer list-inside list-disc">
                    <button
                        onClick={() => {
                            smoothScrollTo(refList[0])
                            setIsOpen(false)
                        }}
                    >
                        History
                    </button>
                </li>
                <li className="cursor-pointer list-inside list-disc">
                    <button
                        onClick={() => {
                            smoothScrollTo(refList[1])
                            setIsOpen(false)
                        }}
                    >
                        Benefits
                    </button>
                </li>
                <li className="cursor-pointer list-inside list-disc">
                    <button
                        onClick={() => {
                            smoothScrollTo(refList[2])
                            setIsOpen(false)
                        }}
                    >
                        Implementation
                    </button>
                </li>
                <li className="cursor-pointer list-inside list-disc">
                    <button
                        onClick={() => {
                            smoothScrollTo(refList[3])
                            setIsOpen(false)
                        }}
                    >
                        Examples
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu
