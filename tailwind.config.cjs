/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'mfm-yellow': '#deb55f',
        'money-green': '#118C4F',
        'mfm-red': '#DE765F',
        'mfm-yg': '#C8DE5F',
        'mfm-light-red': '#f6d8d2'
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
