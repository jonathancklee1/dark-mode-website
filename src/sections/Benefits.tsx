import BenefitCard from '../components/BenefitCard'

function Benefits() {
    const benefitsData = [
        {
            benefit: 'Benefit 1',
            icon: 'eye',
            description:
                'djoasjo djos aodjos jaoo josadj osjoajoopajs ojdo jaosdj osaj oj ojo sjao jo oajso jodajs oj aso j',
        },
        {
            benefit: 'Benefit 2',
            icon: 'access',
            description:
                'djoasjo djos aodjos jaoo josadj osjoajoopajs ojdo jaosdj osaj oj ojo sjao jo oajso jodajs oj aso j',
        },
        {
            benefit: 'Benefit 3',
            icon: 'battery',
            description:
                'djoasjo djos aodjos jaoo josadj osjoajoopajs ojdo jaosdj osaj oj ojo sjao jo oajso jodajs oj aso j',
        },
        {
            benefit: 'Benefit 4',
            icon: 'bed',
            description:
                'djoasjo djos aodjos jaoo josadj osjoajoopajs ojdo jaosdj osaj oj ojo sjao jo oajso jodajs oj aso j',
        },
        {
            benefit: 'Benefit 5',
            icon: 'arrow-eye',
            description:
                'djoasjo djos aodjos jaoo josadj osjoajoopajs ojdo jaosdj osaj oj ojo sjao jo oajso jodajs oj aso j',
        },
        {
            benefit: 'Benefit 6',
            icon: 'palette',
            description:
                'djoasjo djos aodjos jaoo josadj osjoajoopajs ojdo jaosdj osaj oj ojo sjao jo oajso jodajs oj aso j',
        },
    ]
    return (
        <section className="content-container flex-col md:flex md:min-h-screen">
            <h2 className="text-center text-3xl font-bold">Benefits</h2>
            <div className="mt-20 grid grid-cols-1 gap-10 md:my-auto md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                {benefitsData.map((data) => {
                    return <BenefitCard data={data} key={data.benefit} />
                })}
            </div>
        </section>
    )
}

export default Benefits
