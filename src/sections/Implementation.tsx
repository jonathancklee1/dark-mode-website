import { forwardRef } from 'react'

const Implementation = forwardRef(function Implementation(props, ref) {
    return (
        <article
            ref={ref}
            className="content-container scroll-m-24 flex-col md:flex md:min-h-screen"
        >
            <h2 className="text-center text-3xl font-bold">Implementation</h2>
            <p className="mt-7 text-center">
                Do you want to implement dark mode on your own website? This is
                how it is done using React.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur. Egestas sodales sed
                elementum nec id egestas sem arcu. Pulvinar netus varius donec
                tempus aliquet urna turpis pharetra elit.
            </p>
        </article>
    )
})

export default Implementation
