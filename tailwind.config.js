/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mount':"url('src/assets/mount.jpg')"
      }
    },
  },
  plugins: [],
}