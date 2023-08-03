/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}", "./Layouts/**/*.{js,ts,jsx,tsx}", "./Pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        clamp: "clamp(1rem, 5vw, 3rem)"
      },
      fontSize: {
        txtClamp: "clamp(2rem, 5vw, 3rem)"
      },
      height: {
        headerHeight: "70px",
        dynamicHeight: "calc(100vh - 70px)"
      }
    },
  },
  plugins: [],
};
