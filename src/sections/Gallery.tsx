function Gallery() {
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
                src: 'https://picsum.photos/1440/960',
                alt: 'alt image',
            },
        },
        {
            siteName: '',
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
                src: 'https://picsum.photos/1440/960',
                alt: 'alt image',
            },
        },
        {
            siteName: '',
            link: '',
            img: {
                src: 'https://picsum.photos/1440/960',
                alt: 'alt image',
            },
        },
    ]
    return (
        <section className="content-container flex-col md:flex md:min-h-screen">
            <h2 className="text-center text-3xl font-bold">Gallery</h2>
            <div className="mt-20 grid grid-cols-1 gap-6 md:my-auto md:grid-cols-4 lg:gap-8">
                {galleryData.map((image, index: number) => (
                    <div
                        className={`${index === 0 && 'md:col-span-2 md:row-span-2'} group relative cursor-pointer overflow-hidden rounded-xl transition-transform duration-500 ease-in-out`}
                        key={index}
                    >
                        <picture>
                            <img
                                src={image.img.src}
                                alt={image.img.alt}
                                className="aspect-square h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                        </picture>
                        <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-4 bg-black p-8 opacity-60 transition-all duration-500 ease-in-out group-hover:translate-y-0">
                            <p className="text-center text-3xl font-bold md:text-5xl">
                                {image.siteName}
                            </p>
                            <a
                                href={image.link}
                                className="hover:text-accent-color font-medium underline"
                            >
                                View website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
