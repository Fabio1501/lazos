/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://i.postimg.cc/6qC79CC1/home-lazos.jpg')",
      },
      colors: {
        'naranja': '#FC5f23',
        'celeste': '#02AEF6',
        'amarillo': '#FFDA08',

      }
    },
  },
  plugins: [],
}

