import BenefitCard from '../components/BenefitCard'
import { forwardRef } from 'react'
import { benefitsData } from '../data/benefitsData'

const Benefits = forwardRef(function Benefits(props, ref) {
    return (
        <section
            ref={ref}
            className="content-container scroll-m-24 flex-col gap-10 md:flex"
        >
            <h2 className="text-center text-3xl font-bold">Benefits</h2>
            <div className="mt-20 grid grid-cols-1 gap-10 md:my-auto md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                {benefitsData.map((data) => {
                    return <BenefitCard data={data} key={data.benefit} />
                })}
            </div>
        </section>
    )
})

export default Benefits
