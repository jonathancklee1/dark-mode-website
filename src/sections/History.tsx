function History() {
    const historyData = [1, 2, 3, 4]
    return (
        <div className="content-container min-h-screen">
            <h2 className="text-center text-3xl font-bold">History</h2>
            <div className="mt-20 flex justify-between">
                <div className="flex flex-col items-center justify-center gap-4">
                    <p>1987</p>
                    <div className="relative h-full ">
                        <div className=" mx-auto h-full w-2 rounded-lg bg-white "></div>
                        <div className="absolute left-1/2 top-0 size-10 -translate-x-1/2 rounded-full bg-white"></div>
                    </div>
                    <p>Present Day</p>
                </div>
                <div className=" grid w-[70%] place-items-end gap-12">
                    {historyData.map(() => {
                        return (
                            <div className="flex flex-col gap-2 p-6 shadow-2xl">
                                <p className="text-center text-xl font-black">
                                    1987
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
