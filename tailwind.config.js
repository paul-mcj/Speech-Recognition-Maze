/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                quickPing: "quickPing 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                pulseDeep: "pulseDeep 3s ease-out infinite"
            },
            gridTemplateColumns: {
                9: "repeat(9, minmax(0, 1fr))"
            },
            keyframes: {
                quickPing: {
                    "50%, 100%": {
                        opacity: "0"
                    }
                },
                pulseDeep: {
                    "0%, 100%": {
                        transform: "scale(1)"
                    },
                    "50%": {
                        transform: "scale(1.1)"
                    }
                }
            }
        },
        screens: {
            xxsm: "390px",
            xsm: "470px",
            sm: "640px",
            tablet: "880px",
            lg: "1024px",
            xlg: "1350px"
        },
        fontFamily: {
            sans: ["Silkscreen"]
        }
    },
    plugins: []
};
