import BenefitCard from '../components/BenefitCard'
import { forwardRef } from 'react'

const Benefits = forwardRef(function Benefits(props, ref) {
    const benefitsData = [
        {
            benefit: 'Reduced Eye Strain',
            icon: 'eye',
            description:
                'Dark mode can decrease eye strain, especially in low-light conditions, making it easier to read text on screens',
        },
        {
            benefit: 'Enhanced Accessibility',
            icon: 'access',
            description:
                'Individuals with light sensitivity or certain visual impairments may find dark mode more comfortable to use',
        },
        {
            benefit: 'Aesthetic Appeal',
            icon: 'palette',
            description:
                'Many users find dark mode aesthetically pleasing, associating dark colors with luxury and elegance',
        },
        {
            benefit: 'Improved Sleep Quality',
            icon: 'bed',
            description:
                'By decreasing blue light exposure, dark mode may help improve sleep quality if used during the evening or before bedtime',
        },
        {
            benefit: 'Increased Focus',
            icon: 'arrow-eye',
            description:
                'The reduction or elimination of screen flickering and higher contrast in dark mode can potentially increase focus and reduce distractions',
        },

        {
            benefit: 'Battery Savings',
            icon: 'battery',
            description:
                'On devices with OLED or AMOLED screens, dark mode can significantly reduce power consumption, leading to longer battery life',
        },
    ]
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
