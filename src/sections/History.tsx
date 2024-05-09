function History() {
    const historyData = [
        { year: '1987' },
        { year: '1999' },
        { year: '2000' },
        { year: '2006' },
        { year: '2012' },
        { year: '2024' },
    ]
    return (
        <div className="content-container min-h-screen">
            <h2 className="text-center text-3xl font-bold">History</h2>
            <div className="relative mt-20 flex justify-between">
                <div className="flex flex-col items-center justify-center gap-4 md:absolute md:left-1/2 md:h-full md:-translate-x-1/2">
                    <p className="font-bold">1987</p>
                    <div className="relative h-full ">
                        <div className=" mx-auto h-full w-2 rounded-lg bg-white "></div>
                        <div className="absolute left-1/2 top-0 size-10 -translate-x-1/2 rounded-full bg-white"></div>
                    </div>
                    <p className="font-bold">Present Day</p>
                </div>
                <div className="grid w-3/4 place-items-end gap-12 md:w-full md:grid-cols-2 md:grid-rows-7 md:gap-x-[105px] md:gap-y-4">
                    {historyData.map((data, index: number) => {
                        return (
                            <div
                                className={`mx-auto flex max-w-[400px] flex-col gap-2 p-6 shadow-2xl md:row-span-2 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} md:row-start-${index + 1}`}
                            >
                                <p className="text-center text-xl font-black">
                                    {data.year}
                                </p>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Dolorum cupiditate, porro
                                    non placeat dicta commodi.sd asd asd asd s a
                                    sd
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default History
