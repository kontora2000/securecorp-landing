/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {},
    extend: {
      colors: {
        base: '#fff',
        'ui-blue': '#0B99FE',
        'ui-dark-blue': '#07184C',
        'ui-red': '#FE450B',
        'ui-grey': '#E3E8EE',
        'ui-grey-dark': '#18222E',
        'ui-black': '#0E121E'
      }
    }
  },
  plugins: []
};
