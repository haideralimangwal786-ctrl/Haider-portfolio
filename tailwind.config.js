/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lime: {
          300: '#86fa24',
          400: '#6BF500',
          500: '#56c700',
          600: '#429a00',
          700: '#2f6e00'
        },
        neon: {
          300: '#86fa24',
          400: '#6BF500',
          500: '#56c700',
          600: '#429a00',
          700: '#2f6e00'
        },
        dark: {
          bg: '#050B04',
          card: '#0B130A',
          cardHover: '#111d10',
          border: '#162714'
        },
        muted: '#A0A5A0'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
