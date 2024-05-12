import GalleryMedia from '../components/GalleryMedia'
import { forwardRef } from 'react'

const Gallery = forwardRef(function Gallery(props, ref) {
    const galleryData = [
        {
            siteName: 'VueJS',
            link: '',
            img: {
                src: 'https://picsum.photos/1440/960',
                alt: 'alt image',
            },
        },
        {
            siteName: '',
            link: '',
            img: {
                src: 'https://picsum.photos/1080/960',
                alt: 'alt image',
            },
        },
        {
            siteName: '',
            link: '',
            img: {
                src: 'https://picsum.photos/1080/960',
                alt: 'alt image',
            },
        },
        {
            siteName: '',
            link: '',
            img: {
                src: 'https://picsum.photos/1080/960',
                alt: 'alt image',
            },
        },
        {
            siteName: '',
            link: '',
            img: {
                src: 'https://picsum.photos/1080/960',
                alt: 'alt image',
            },
        },
    ]
    return (
        <section
            ref={ref}
            className="content-container scroll-m-24 flex-col md:flex md:min-h-screen"
        >
            <h2 className="text-center text-3xl font-bold">Gallery</h2>
            <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:my-auto lg:grid-cols-4 lg:gap-8">
                {galleryData.map((image, index: number) => (
                    <GalleryMedia image={image} index={index} key={index} />
                ))}
            </div>
        </section>
    )
})

export default Gallery
