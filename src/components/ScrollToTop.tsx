import ArrowUp from '../assets/arrow-up-solid.svg?react'
function ScrollToTop({ topElement }) {
    function smoothScrollTo(target) {
        if (target) {
            target.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <button
            className="fixed bottom-10 right-6 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-card-color p-2 opacity-30 hover:opacity-100 [&_svg]:fill-text-color [&_svg]:hover:fill-accent-color"
            onClick={() => smoothScrollTo(topElement)}
        >
            <ArrowUp />
        </button>
    )
}

export default ScrollToTop
