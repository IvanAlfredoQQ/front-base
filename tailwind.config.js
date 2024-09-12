/** @type {import('tailwindcss').Config} */
import tailwindcssPrimeui from 'tailwindcss-primeui';

export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssPrimeui]
}

