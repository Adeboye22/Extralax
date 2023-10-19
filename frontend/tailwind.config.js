/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      'sm': { max: '640px' },
      // => @media (max-width: 640px) { ... }

      'md': { max:'768px' },
      // => @media (max-width: 768px) { ... }

      'lg': { max:'1024px' },
      // => @media (max-width: 1024px) { ... }
    },
    colors:{
      'orange': '#FFC501',
      'green': '#003333',
      'white': '#ffffff',
      'altBlack': '#262525',
      'footColor': '#fff2ec'
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('./assets/Img1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

