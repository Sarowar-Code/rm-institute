/** @type {import('tailwindcss').Config} */
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./driving/index.html",
    "./automobile/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#FFFFFF',
        accent: '#F97316'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'hind': ['Hind Siliguri', 'sans-serif'],
        'noto': ['Noto Sans Bengali', 'sans-serif']
      }
    }
  },
  plugins: []
}
