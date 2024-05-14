interface HistoryCardProps {
    data: {
        year: string
        description: string
    }
    index: number
}
import parse from 'html-react-parser'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

function HistoryCard({ data, index }: HistoryCardProps) {
    const card = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(
        () => {
            gsap.from('.history-card', {
                duration: 1.25,
                translateY: 70,
                opacity: 0,
                ease: 'ease',
                scrollTrigger: {
                    trigger: '.history-card',
                    start: 'top 90%',
                },
            })
        },
        { scope: card }
    )

    let gridRowStart = ''
    switch (index) {
        case 0:
            gridRowStart = 'md:row-start-1'
            break
        case 1:
            gridRowStart = 'md:row-start-2'
            break
        case 2:
            gridRowStart = 'md:row-start-3'
            break
        case 3:
            gridRowStart = 'md:row-start-4'
            break
        case 4:
            gridRowStart = 'md:row-start-5'
            break
        case 5:
            gridRowStart = 'md:row-start-6'
            break
        default:
            break
    }
    return (
        <div
            ref={card}
            className={`shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105 md:row-span-2 md:max-w-[400px] ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} ${gridRowStart}`}
        >
            <div
                className={`history-card mx-auto flex flex-col gap-2 bg-card-color p-6 text-text-color opacity-100`}
            >
                <p className="text-center text-xl font-black">{data.year}</p>
                <p>{parse(data.description)}</p>
            </div>
        </div>
    )
}

export default HistoryCard
