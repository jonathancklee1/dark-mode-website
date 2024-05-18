import { forwardRef, useContext, useState } from 'react'
import { ThemeContext } from '../App'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const HeroBanner = forwardRef(function HeroBanner(
    _: unknown,
    ref: React.Ref<HTMLDivElement>
) {
    const { theme } = useContext(ThemeContext)!
    let topHeadingAnimation: gsap.core.Tween | null = null
    const [merged, setMerged] = useState(false)
    let bottomHeadingAnimation: gsap.core.Tween | null = null

    useGSAP(() => {
        topHeadingAnimation = gsap.to('#top-heading', {
            translateY: -155,
            ease: 'ease',
            duration: 1.5,
            delay: 0.7,
            opacity: 1,
        })
        bottomHeadingAnimation = gsap.to('#bottom-heading', {
            translateY: 155,
            ease: 'ease',
            duration: 1.5,
            delay: 0.7,
            opacity: 1,
        })
        topHeadingAnimation.play()
        bottomHeadingAnimation.play()
    })
    function mergeIn() {
        if (
            topHeadingAnimation?.isActive() ||
            bottomHeadingAnimation?.isActive()
        )
            return
        gsap.to('#top-heading', {
            translateY: 0,
            ease: 'ease',
            duration: 0.7,
            opacity: 0,
        })
        gsap.to('#bottom-heading', {
            translateY: 0,
            ease: 'ease',
            duration: 0.7,
            opacity: 0,
        })
        setMerged(true)
    }

    function mergeOut() {
        if (
            topHeadingAnimation?.isActive() ||
            bottomHeadingAnimation?.isActive()
        )
            return
        gsap.to('#top-heading', {
            translateY: -155,
            ease: 'ease',
            duration: 0.7,
            opacity: 1,
        })
        gsap.to('#bottom-heading', {
            translateY: 155,
            ease: 'ease',
            duration: 0.7,
            opacity: 1,
        })
        setMerged(false)
    }
    return (
        <div
            ref={ref}
            className="content-container flex min-h-screen items-center justify-center"
        >
            <div className="relative flex flex-col gap-2">
                <p
                    id="top-heading"
                    className="outlined-text absolute text-center text-7xl font-black uppercase text-transparent opacity-0 md:text-8xl xl:text-9xl"
                >
                    {theme === 'light' ? '!Dark Mode' : 'Dark Mode'}
                </p>
                <h1
                    onMouseEnter={mergeIn}
                    onMouseLeave={mergeOut}
                    onClick={() => {
                        if (merged) {
                            mergeOut()
                        } else {
                            mergeIn()
                        }
                    }}
                    className="z-10 cursor-pointer text-center text-7xl font-black uppercase md:text-8xl xl:text-9xl"
                >
                    {theme === 'light' ? '!Dark Mode' : 'Dark Mode'}
                </h1>
                <p
                    id="bottom-heading"
                    className="outlined-text absolute text-center text-7xl font-black uppercase text-transparent opacity-0 md:text-8xl xl:text-9xl"
                >
                    {theme === 'light' ? '!Dark Mode' : 'Dark Mode'}
                </p>
            </div>
        </div>
    )
})

export default HeroBanner
