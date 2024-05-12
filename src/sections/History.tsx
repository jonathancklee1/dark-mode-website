import { forwardRef } from 'react'
import HistoryCard from '../components/HistoryCard'
const History = forwardRef(function History(props, ref) {
    const historyData = [
        { year: '1987' },
        { year: '1999' },
        { year: '2000' },
        { year: '2006' },
        { year: '2012' },
        { year: '2024' },
    ]
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
                        <div className=" mx-auto h-full w-2 rounded-lg bg-text-color"></div>
                        <div className="absolute left-1/2 top-0 size-10 -translate-x-1/2 rounded-full bg-text-color"></div>
                    </div>
                    <p className="mt-4 text-center font-bold">Present Day</p>
                </div>
                <div className="z-10 grid  place-items-end gap-12 opacity-75 md:grid-cols-2 md:grid-rows-7 md:gap-x-[105px] md:gap-y-4">
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
