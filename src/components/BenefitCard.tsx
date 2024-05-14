import ArrowEyes from '../assets/arrows-to-eye-solid.svg?react'
import Battery from '../assets/battery-three-quarters-solid.svg?react'
import Bed from '../assets/bed-solid.svg?react'
import Eye from '../assets/eye-regular.svg?react'
import Palette from '../assets/palette-solid.svg?react'
import Access from '../assets/universal-access-solid.svg?react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
interface BenefitCardProps {
    data: {
        icon: string
        benefit: string
        description: string
    }
}

function BenefitCard({ data }: BenefitCardProps) {
    const card = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(
        () => {
            gsap.from('.benefit-card', {
                duration: 0.75,
                translateY: 70,
                opacity: 0,
                ease: 'ease',
                scrollTrigger: {
                    trigger: '.benefit-card',
                    start: 'top 90%',
                },
            })
        },
        { scope: card }
    )
    function getIcon(icon: string) {
        switch (icon) {
            case 'eye':
                return <Eye />
            case 'battery':
                return <Battery />
            case 'bed':
                return <Bed />
            case 'palette':
                return <Palette />
            case 'access':
                return <Access />
            case 'arrow-eye':
                return <ArrowEyes />
            default:
                return <Eye />
        }
    }
    return (
        <div
            ref={card}
            className="rounded-3xl opacity-50 transition-all duration-500 ease-in-out hover:bg-card-color hover:opacity-100"
        >
            <div className="benefit-card flex flex-col items-center justify-start gap-4 px-4 py-8 text-text-color [&_svg]:fill-text-color [&_svg]:hover:fill-accent-color">
                {getIcon(data.icon)}
                <p className="text-center text-xl font-black md:text-2xl">
                    {data.benefit}
                </p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default BenefitCard
