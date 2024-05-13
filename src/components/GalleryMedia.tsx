interface GalleryMediaProps {
    image: {
        img: {
            src: string
            alt: string
        }
        siteName: string
        link: string
    }
    index: number
}

function GalleryMedia({ image, index }: GalleryMediaProps) {
    return (
        <div
            className={`${index === 0 && 'md:col-span-2 md:row-span-2'} group relative cursor-pointer overflow-hidden rounded-xl transition-transform duration-500 ease-in-out`}
            key={index}
        >
            <picture>
                <img
                    src={image.img.src}
                    alt={image.img.alt}
                    className="aspect-square h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                />
            </picture>
            <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center gap-4 bg-black p-8 text-white opacity-70 transition-all duration-500 ease-in-out group-hover:translate-y-0">
                <p className="text-center text-3xl font-bold md:text-4xl">
                    {image.siteName}
                </p>
                <a
                    href={image.link}
                    target="_blank"
                    className="font-medium underline hover:text-accent-color"
                >
                    View website
                </a>
            </div>
        </div>
    )
}

export default GalleryMedia
