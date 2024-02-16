/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  prefix: "tw-",
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};
