/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            dropShadow: {
                sm: "0 20px 20px rgba(110, 202, 255, 0.4)",
                lg: "0 40px 40px rgba(110, 202, 255, 0.5)",
            },
        },
    },
    plugins: [],
};
