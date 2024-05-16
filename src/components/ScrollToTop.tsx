import ArrowUp from './svg/ArrowUp'
interface ScrollToTopProps {
    topElement: React.RefObject<HTMLDivElement>
}

function ScrollToTop({ topElement }: ScrollToTopProps) {
    function smoothScrollTo(target: React.RefObject<HTMLDivElement>) {
        if (target) {
            target.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <button
            className="fixed bottom-10 right-6 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-card-color p-2 opacity-30 transition-all duration-300 ease-in-out hover:opacity-100 [&_svg]:fill-text-color [&_svg]:hover:fill-accent-color"
            onClick={() => smoothScrollTo(topElement)}
        >
            <ArrowUp />
        </button>
    )
}

export default ScrollToTop
