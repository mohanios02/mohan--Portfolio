// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#0ea5e9",
//         secondary: "#1e293b",
//         accent: "#f43f5e",
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira': ['"Saira Stencil One"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'turret': ['"Turret Road"', 'sans-serif'],
      },
      colors: {
        'amber-600': 'hsl(24, 74%, 58%)',
        'amber-700': 'hsl(24, 74%, 64%)',
        'yellow-400': 'hsl(51, 95%, 54%)',
        'orange-600': 'hsl(13, 96%, 47%)',
        'gray-800': 'hsl(0, 0%, 19%)',
        'gray-900': 'hsl(0, 0%, 12%)',
      },
    },
  },
  plugins: [],
}