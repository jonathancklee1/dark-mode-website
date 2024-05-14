import { forwardRef } from 'react'
import HistoryCard from '../components/HistoryCard'
import { historyData } from '../data/historyData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const History = forwardRef(function History(props, ref) {
    useGSAP(() => {
        gsap.to('.timeline-circle', {
            top: 'calc(100% - 30px)',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 20%',
                end: 'bottom 20%',
                markers: true,
                toggleActions: 'play none none reverse',
                scrub: true,
            },
        })
    })
    return (
        <section
            ref={ref}
            className="content-container min-h-screen scroll-m-24"
        >
            <h2 className="mb-20 text-center text-3xl font-bold ">History</h2>
            <div className="relative flex justify-center ">
                {/* Timeline */}
                <div className="absolute -top-10 left-1/2 h-full -translate-x-1/2 opacity-50 md:opacity-100">
                    <p className="mb-4 text-center font-bold">1987</p>
                    <div className="relative h-full">
                        <div className="timeline mx-auto h-full w-2 rounded-lg bg-text-color"></div>
                        <div className="timeline-circle absolute left-1/2 top-0 size-10 -translate-x-1/2 rounded-full bg-text-color"></div>
                    </div>
                    <p className="mt-4 text-center font-bold">Present Day</p>
                </div>
                <div className="z-10 grid  place-items-center gap-12 opacity-75 md:grid-cols-2 md:grid-rows-6 md:gap-x-[105px] md:gap-y-4">
                    {historyData.map((data, index: number) => {
                        return (
                            <HistoryCard
                                data={data}
                                index={index}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
})

export default History
