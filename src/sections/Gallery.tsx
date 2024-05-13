import GalleryMedia from '../components/GalleryMedia'
import { forwardRef } from 'react'
import { galleryData } from '../data/galleryData'
const Gallery = forwardRef(function Gallery(props, ref) {
    return (
        <section
            ref={ref}
            className="content-container scroll-m-24 flex-col md:flex"
        >
            <h2 className="mb-6 text-center text-3xl font-bold">Gallery</h2>
            <p className="text-center">
                <em>Some examples of clean-looking dark mode websites</em>
            </p>
            <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
                {galleryData.map((image, index: number) => (
                    <GalleryMedia image={image} index={index} key={index} />
                ))}
            </div>
        </section>
    )
})

export default Gallery
