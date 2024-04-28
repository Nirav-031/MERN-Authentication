/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      robot: ["Roboto Mono", "monospace"],
      reg: ["Inconsolata", "monospace"],
      dem:["DM Sans", "sans-serif"]
    }
  },
  plugins: [],
}

