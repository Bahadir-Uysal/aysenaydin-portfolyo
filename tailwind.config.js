/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-purple-to-green":
          "linear-gradient(to right, #4731D3 70%, #CBF281 70%)",
      },
      colors: {
        green: " #CBF281",
        purple: "#4731D3",
        gray: " #777777",
        redux: "#764abc",
      },
      boxShadow: {
        "card-shadow": "0px 8px 28px -6px",
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
