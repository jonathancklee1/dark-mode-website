import React from 'react'

function Gallery() {
    const galleryData = [
        { year: '1987' },
        { year: '1999' },
        { year: '2000' },
        { year: '2006' },
        { year: '2012' },
        { year: '2024' },
    ]
    return (
        <section className="content-container flex-col md:flex md:min-h-screen">
            <h2 className="text-center text-3xl font-bold">Gallery</h2>
            <div className="mt-7 grid grid-cols-1 gap-10">
                {galleryData.map((data, index: number) => (
                    <div>
                        <img
                            src="https://picsum.photos/200"
                            alt=""
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
