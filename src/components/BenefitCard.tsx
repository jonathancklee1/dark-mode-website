import React from 'react'

function BenefitCard({ data }) {
    return (
        <div className="hover:bg-card-color flex flex-col items-center justify-center gap-4 rounded-3xl px-4 py-8 opacity-50 transition-all duration-500 ease-in-out hover:opacity-100">
            {/* icon */}
            <p className="text-center text-2xl font-black">{data.benefit}</p>
            <p className="text-lg">{data.description}</p>
        </div>
    )
}

export default BenefitCard
