interface HistoryCardProps {
    data: {
        year: string
    }
    index: number
}

function HistoryCard({ data, index }: HistoryCardProps) {
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
            className={`mx-auto flex max-w-[400px] flex-col gap-2 p-6 shadow-2xl md:row-span-2 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} ${gridRowStart}`}
        >
            <p className="text-center text-xl font-black">{data.year}</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum cupiditate, porro non placeat dicta commodi.sd asd asd
                asd s a sd
            </p>
        </div>
    )
}

export default HistoryCard