/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/**/*.{html,js}',
  ],
  theme: {  colors: {
    'container':'#f2f4f8',
      'blue1': '#5616f5',
      'blue2': '#7d28eb',
      'white': '#ffffff',
      'turquaz':'#3beaf5',
      'slate':{
        500:'#64748b',
      },
      'green':{
        300:'#86efac'
      },
      "pink":"#ff5acd",
      "lightPink":"#fd86a7",
    },
    fontSize: {
      '28': '28px',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    
    screens: {
      'xs': '320px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: false
  },
}