/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bareey: {
          primary: '#007aff',
          secondary: '#1a1a1a',
          accent: '#f9f9f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        logo: ['Norican', 'cursive'],
      },
    },
  },
  plugins: [],
}
