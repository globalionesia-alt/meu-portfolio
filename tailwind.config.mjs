/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FAFAF9', // Stone-50
        ink: '#1C1917',    // Stone-900
        accent: '#C5A059', // Gold
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    typography(),
  ],
}
