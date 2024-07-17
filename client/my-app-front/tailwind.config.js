/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        k7elChuia: "#333533",
        k7elBzaf: "##202020",
        sferChuia: "#ffd100",
        sferBza: "#ffee32",
        grayChuia: "#d6d6d6",
      },
    

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};