/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                iris: {
                    50: '#f0f4ff',
                    100: '#dce6ff',
                    200: '#bed0ff',
                    300: '#91aeff',
                    400: '#6080ff',
                    500: '#3d5aff',
                    600: '#2136f5',
                    700: '#1a27e1',
                    800: '#1b23b6',
                    900: '#1c2490',
                },
                teal: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    500: '#14b8a6',
                    600: '#0d9488',
                }
            },
        },
    },
    plugins: [],
}
