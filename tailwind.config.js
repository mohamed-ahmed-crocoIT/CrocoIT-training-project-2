/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        "main-color":"#473BF0",
      },
      backgroundImage: {
        'layer-image': "url('/src/images/header-layer.png')",
        'testimonial-layer':"url('/src/images/Testimonial-layer.png')",
      }
    },
  },
  plugins: [],
}

