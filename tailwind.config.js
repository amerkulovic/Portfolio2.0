/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "var(--primary-light)",
        darkBlue: "#0A192F",
        mediumBlue: "#1E3A8A",
        lightBlue: "#3B82F6",
        skyBlue: "#93C5FD",
        mutedBlue: "#E0F2FE",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
