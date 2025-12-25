/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        snow: 'snow 10s linear infinite',
        aurora: 'aurora 20s ease infinite',
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0deg)' },
          '100%': { transform: 'translateY(110vh) translateX(20px) rotate(360deg)' },
        },
        aurora: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.2) translate(10%, 10%)' },
        }
      },
    },
  },
  plugins: [],
}