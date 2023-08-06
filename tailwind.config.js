/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}", "./Layouts/**/*.{js,ts,jsx,tsx}", "./Pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        vollkorn: ['Vollkorn', 'serif']
      },
      padding: {
        clamp: "clamp(1rem, 5vw, 3rem)"
      },
      fontSize: {
        headingTxtClamp: "clamp(2.5rem, 8vw, 3.75rem)",
        specializationTxtClamp: "clamp(1.5rem, 5vw, 2rem)",
        titleTxtClamp: "clamp(1rem, 4vw, 1.375rem)"
      },
      height: {
        headerHeight: "70px",
        dynamicHeight: "calc(100vh - 70px)"
      }
    },
  },
  plugins: [],
};
