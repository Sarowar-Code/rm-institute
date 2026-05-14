/** @type {import('tailwindcss').Config} */

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
        // Primary Brand Colors
        primary: '#1A3A52',        // Professional Dark Blue
        secondary: '#ffdbc3',      // White
        accent: '#FF6B35',         // Vibrant Orange

        // Supporting Colors
        success: '#2ECC71',        // Success Green
        warning: '#F39C12',        // Warning Amber
        error: '#E74C3C',          // Error Red
        info: '#3498DB',           // Info Blue

        // Neutral Colors (Grays)
        'neutral-50': '#F9FAFB',
        'neutral-100': '#F3F4F6',
        'neutral-200': '#E5E7EB',
        'neutral-300': '#D1D5DB',
        'neutral-400': '#9CA3AF',
        'neutral-500': '#6B7280',
        'neutral-600': '#4B5563',
        'neutral-700': '#374151',
        'neutral-800': '#1F2937',
        'neutral-900': '#111827',

        // Additional Professional Shades
        'primary-dark': '#0F2A3E',
        'primary-light': '#2D5A7B',
        'accent-dark': '#E05A1F',
        'accent-light': '#FF8C5C',
      },
      fontFamily: {
        hind: ['Hind Siliguri', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
