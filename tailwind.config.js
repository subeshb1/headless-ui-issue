const defaultTheme = require('tailwindcss/defaultTheme');
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "br-red": "#d64045",
        "br-green": "#218380",
        "br-yellow": "#ffbc42",
        "br-primary": "#192D38",
        "br-secondary": "#218380",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  important: "#app"
};
