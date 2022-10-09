/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1ce783',
        primaryFade: '#1ce78181',
        lightBg: 'rgba(0, 0, 0, 0.5)',
        darkBg: '#0B0C0F'
      },
      fontSize: {
      'xxs': '.55rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
