/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {},
    extend: {
      colors: {
        white: '#fff',
        black: '#0E121E',
        base: '#fff',
        'blue-500': '#0B99FE'
      }
    }
  },
  plugins: []
};
