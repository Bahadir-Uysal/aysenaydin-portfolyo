/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "green":" #CBF281",
        "purple":"#4731D3",
        'gray':' #777777',
        'redux':'#764abc',
        'vs':"#038fd6"
      },
      fontSize: {
        "5.5xl": "3.375rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },

  },
  plugins: [],
};