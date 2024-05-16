import ArrowEye from './svg/ArrowEye'
import Battery from './svg/Battery'
import Bed from './svg/Bed'
import Eye from './svg/Eye'
import Palette from './svg/Palette'
import Access from './svg/Access'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
interface BenefitCardProps {
    data: {
        icon: string
        benefit: string
        description: string
    }
}

function BenefitCard({ data }: BenefitCardProps) {
    const cardRef = useRef(null)
    useGSAP(() => {
        gsap.from(cardRef.current, {
            duration: 0.75,
            translateY: 70,
            opacity: 0,
            ease: 'ease',
            scrollTrigger: {
                trigger: cardRef.current,
                start: 'top 90%',
            },
        })
    })

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
                return <ArrowEye />
            default:
                return <Eye />
        }
    }
    return (
        <div ref={cardRef}>
            <div className="benefit-card flex cursor-pointer flex-col items-center justify-start gap-4 rounded-3xl px-4 py-8 text-text-color opacity-50 transition-all duration-500 ease-in-out hover:bg-card-color hover:opacity-100 [&_svg]:fill-text-color [&_svg]:hover:fill-accent-color">
                {getIcon(data.icon)}
                <p className="text-center text-xl font-black md:text-2xl">
                    {data.benefit}
                </p>
                <p className="">{data.description}</p>
            </div>
        </div>
    )
}

export default BenefitCard
