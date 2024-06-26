/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'background-color': 'var(--background-color)',
                'text-color': 'var(--text-color)',
                'card-color': 'var(--card-color)',
                'accent-color': 'var(--accent-color)',
            },
            height: {
                'header-height': 'var(--header-height)',
            },
        },
    },
    plugins: [],
}
