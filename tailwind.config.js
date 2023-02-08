/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F6F8FD",
        "dark-gray": "#454545",
        charcoal: "#212121",
      },
    },
  },
  plugins: [],
};
