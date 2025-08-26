import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "slide1": "url('/img/banner.png')",
                
            },
            fontFamily: {
                bodoni: ['var(--font-bodoni)'],
            },
            colors: {
                cyan: {
                    "800": "#226777",
                    "400": "#5FC2D9",
                },
                
                trueGray: {
                    "200": "#DEDEDE",
                    "400": "#A2A2A2",
                    "800": "#242424",
                },
                
            },
        },
        plugins: [],

    },
}
export default config;