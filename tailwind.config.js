/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title:"#28283D",
        h2:"#87879D",
        btn1:"#4D96A9",
        btn2:"#855FB1",
        sp:"#8FE3F9",
        tr:"#D8D8D8",
        num:"#87879D",
        gree:"#4D96A9",
        sur:"#4D96A9",
        num2:"#D9B8FF",
        hcol:"#B18BDD",
        hcol1:"#71C0D4"
      }
    },
  },
  plugins: [],
}

