import ArrowEyes from '../assets/arrows-to-eye-solid.svg?react'
import Battery from '../assets/battery-three-quarters-solid.svg?react'
import Bed from '../assets/bed-solid.svg?react'
import Eye from '../assets/eye-regular.svg?react'
import Palette from '../assets/palette-solid.svg?react'
import Access from '../assets/universal-access-solid.svg?react'

interface BenefitCardProps {
    data: {
        icon: string
        benefit: string
        description: string
    }
}

function BenefitCard({ data }: BenefitCardProps) {
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
        <div className="flex flex-col items-center justify-center gap-4 rounded-3xl px-4 py-8 opacity-50 transition-all duration-500 ease-in-out hover:bg-card-color hover:opacity-100 [&_svg]:fill-text-color [&_svg]:hover:fill-accent-color">
            {getIcon(data.icon)}
            <p className="text-center text-2xl font-black">{data.benefit}</p>
            <p className="text-lg">{data.description}</p>
        </div>
    )
}

export default BenefitCard
