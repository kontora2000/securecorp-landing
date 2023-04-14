/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ui-blue': '#0B99FE',
        'ui-blue-dark': '#07184C',
        'ui-red': '#FE450B',
        'ui-grey': '#E3E8EE',
        'ui-gray-light': 'rgba(255, 255, 255,0.88)',
        'ui-gray-dark': 'rgba(255, 255, 255, 0.32)',
        'ui-gray-darker': '#18222E',
        'ui-black': '#0E121E',
        'ui-green': '#01B171',
        'ui-gray-2': 'rgba(255,255,255,0.8)'
      }
    }
  },
  plugins: []
};
