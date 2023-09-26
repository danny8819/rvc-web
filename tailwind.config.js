/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-color": "#f69",
        "heading-color": "#3e4555",
      },
      boxShadow: {
        default: "0px 3px 12px 0px rgba(104, 113, 134, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
  corePlugins: {
    preflight: false,
  },
};
// npx tailwind build -o xxx.css
