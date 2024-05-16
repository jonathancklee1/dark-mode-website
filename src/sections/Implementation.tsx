import { forwardRef, useRef } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Implementation = forwardRef<HTMLElement, object>(function Implementation(
    _: unknown,
    ref
) {
    const stepRef = useRef(null)
    const codeCustomStyles = { padding: '24px', borderRadius: '12px' }
    const steps = gsap.utils.selector(ref)

    useGSAP(() => {
        steps('.step').forEach((step) => {
            gsap.from(step, {
                duration: 0.75,
                translateY: 70,
                opacity: 0,
                ease: 'ease',
                scrollTrigger: {
                    trigger: step,
                    start: 'top 90%',
                },
            })
        })
    })
    return (
        <section
            ref={ref}
            className="content-container scroll-m-24 flex-col md:flex md:min-h-screen"
        >
            <h2 className="text-center text-3xl font-bold">Implementation</h2>
            <p className="mb-6 mt-7 text-center">
                Do you want to implement dark mode on your own website?
                <br />
                <br />
                There are several ways to implement dark mode into your project
                but here’s a step-by-step tutorial on how to implement dark mode
                using the useContext hook in React and Tailwind CSS, with the
                same techniques used to build this page too!
            </p>
            <p className="mb-14">
                Have a project set up using Create React App or Vite with React
                and Tailwind CSS installed and ready to go. Refer to the{' '}
                <a
                    href="https://react.dev/learn/installation"
                    target="_blank"
                    className="underline hover:text-accent-color"
                >
                    React Docs{' '}
                </a>
                and{' '}
                <a
                    href="https://tailwindcss.com/docs/installation"
                    target="_blank"
                    className="underline hover:text-accent-color"
                >
                    Tailwind Docs
                </a>{' '}
                if you are having trouble getting set up.
            </p>

            {/* Step 1 */}
            <div ref={stepRef} className="step mb-14">
                <h3 className="mb-6 text-xl font-bold">
                    <span className="text-accent-color">Step 1:</span> Create a
                    Context for the Theme
                </h3>
                <p className="mb-4">
                    At the highest level component in your application, this is
                    usually your <code>App.js</code> file, you need to create a
                    context that will hold the state of your theme. Import
                    useContext from React and create an instance of the context.
                    Export it so you can reference it in other components.
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={a11yDark}
                    customStyle={codeCustomStyles}
                >
                    {`import { createContext } from 'react'

export const ThemeContext = createContext(null)
`}
                </SyntaxHighlighter>
            </div>
            {/* Step 2 */}
            <div ref={stepRef} className="step mb-14">
                <h3 className="mb-6 text-xl font-bold">
                    <span className="text-accent-color">Step 2:</span> Add a
                    Theme State
                </h3>
                <p className="mb-4">
                    Add a theme state to your App component. For this website, I
                    had defaulted to dark. Make sure to import useState as well.
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={a11yDark}
                    customStyle={codeCustomStyles}
                >
                    {`const [theme, setTheme] = useState('dark')`}
                </SyntaxHighlighter>
            </div>
            {/* Step 3 */}
            <div ref={stepRef} className="step mb-14">
                <h3 className="mb-6 text-xl font-bold">
                    <span className="text-accent-color">Step 3:</span> Wrap
                    Context around App with the Theme Provider
                </h3>
                <p className="mb-4">
                    Anywhere in your application, you can now use the useContext
                    hook to access the dark mode state and the function to
                    toggle it. Pass in the states you want access to in the
                    child components in the value prop of the ThemeProvider.
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={a11yDark}
                    customStyle={codeCustomStyles}
                >
                    {`<ThemeContext.Provider value={{ theme, setTheme }}>
    {/* Your Child Components*/}
</ThemeContext.Provider>`}
                </SyntaxHighlighter>
            </div>
            {/* Step 4 */}
            <div ref={stepRef} className="step mb-14">
                <h3 className="mb-6 text-xl font-bold">
                    <span className="text-accent-color">Step 4: </span> Add
                    theme to data-theme attribute in main element
                </h3>
                <p className="mb-4">
                    Here is where you can take many routes to apply the theme to
                    your project. In this website, the theme state is provided
                    as a data-attribute in the <code>&lt;main&gt;</code>{' '}
                    element. This is done because, we can easily access the
                    data-theme attribute using the
                    <code> main[data-theme='dark'] </code> selector.
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={a11yDark}
                    customStyle={codeCustomStyles}
                >
                    {`<ThemeContext.Provider value={{ theme, setTheme }}>
    <main data-theme={theme}>
        {/* Your Child Components*/}
    </main>
</ThemeContext.Provider>
`}
                </SyntaxHighlighter>
            </div>
            {/* Step 5 */}
            <div ref={stepRef} className="step mb-14">
                <h3 className="mb-6 text-xl font-bold">
                    <span className="text-accent-color">Step 5:</span> Add theme
                    colour variables in the index.css file
                </h3>
                <p className="mb-4">
                    In the <code>index.css</code> file, declare your chosen
                    colours as variables using the data-theme selector. If you
                    are using Tailwind, remember to also declare the names in
                    the <code>tailwind.config.js </code>
                    file. Now you can use these styles as normal Tailwind
                    classes e.g. <code>bg-background-color</code>.
                </p>
                <SyntaxHighlighter
                    language="css"
                    style={a11yDark}
                    customStyle={codeCustomStyles}
                >
                    {`main[data-theme='dark'] {
    --background-color: #your-colour-here;
    --text-color :#your-colour-here;
}
main[data-theme='light'] {
    --background-color: #your-colour-here;
    --text-color: #your-colour-here;
}
`}
                </SyntaxHighlighter>
            </div>
            {/* Step 6 */}
            <div ref={stepRef} className="step mb-14">
                <h3 className="mb-6 text-xl font-bold">
                    <span className="text-accent-color">Step 6</span> : Use the
                    Theme Context in Components
                </h3>
                <p className="mb-4">
                    Anywhere in your application, you can now use the useContext
                    hook to access the dark mode/theme state and the function to
                    toggle it.
                </p>
                <SyntaxHighlighter
                    language="jsx"
                    style={a11yDark}
                    customStyle={codeCustomStyles}
                >
                    {`import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const SomeComponent = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
    <div className={theme ? 'dark' : 'light'}>
        <button onClick={setTheme}>Toggle Dark Mode</button>
      {/* Rest of your component */}
    </div>
    ); 
};
`}
                </SyntaxHighlighter>
            </div>

            <p className="mb-6 text-center">
                <em>And there you go!</em>
                <br />
                <br />
                You have now made a working dark mode theme for your project
                with a few simple steps. Of course, this is one of many ways you
                can implement dark mode into your project but this should be
                sufficient for any simple website that you want to elevate the
                design to the next level!
                <br />
                <br />
                <em>
                    It is time to join the <strong>Dark Side</strong>!
                </em>
            </p>
        </section>
    )
})

export default Implementation
