import { forwardRef } from 'react'
import HistoryCard from '../components/HistoryCard'
const History = forwardRef(function History(props, ref) {
    const historyData = [
        {
            year: '1948',
            description:
                'In 1984, the first programmable computer, named the "<span class="text-[#61ff00]">Manchester Baby</span>", was powered by powerful cathode ray tubes or CRTs, first implemented for the use of radar screens during WWII. Built-in electron guns were used to target and illuminate phosphors that were placed behind glass screens, giving them the "neon" green illumination against a dark screen.<br/> As a result, the earliest computer ran on dark mode by default!',
        },
        {
            year: 'Late 1980s',
            description:
                'As computers were becoming more and more mainstream after the release of home computers such as the Apple II in 1979, the desire for monochromatic screens were decreasing. The rise of <span class="text-[#61ff00]">positive polarity</span> (dark text on light background) was adopted for computer interfaces due to the industry wanting to create a familiar working environment for users - to emulate writing on paper.',
        },
        {
            year: '2000s',
            description:
                'By the mid 2000s, LCDs had replaced the majority of CRTs used in laptop and desktop displays, due to the higher image quality and reduced power consumption. This trend paved the way for LED displays, which utilize crystals combined with a more precise backlight to offer <span class="text-[#61ff00]">stunning</span> visuals and <span class="text-[#61ff00]">vibrant</span> screens.',
        },
        {
            year: '2019',
            description:
                'The popularity of dark mode experienced a revival when leading technology corporations such as Google and Apple rolled out dark themes for their Android and iOS platforms. These introductions were highlighted at the Google I/O and Apple WWDC events in 2019. The promotion of dark mode emphasized its <span class="text-[#61ff00]">benefits</span>, shown further in the section below, which includes minimizing eye strain, enhancing concentration, and extending battery life on electronic devices.',
        },
        {
            year: '2024',
            description:
                'Nowadays, dark mode is a feature that’s broadly accessible across a multitude of operating systems, apps, and web platforms. It is now considered a <span class="text-[#61ff00]">personal preference</span> on whether dark mode is used, serving to accommodate the comfort and digital preferences of users.',
        },
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
