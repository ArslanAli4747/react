/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        "nova":['Proxima Nova'],
        "dosis":['Dosis', 'sans-serif'],
        "press":['"Press Start 2P"', "cursive"]  ,
        "sacramento":['Sacramento'],
        "abc":['"Mr Dafoe"'],
        "Pacifico":['Pacifico'],
        "noto":['"Noto Sans Tagbanwa"', 'sans-serif'],
        "bungee":['"Bungee Inline"', 'cursive']
      },
      fontSize:{
        '4xl': ['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '1em',
          fontWeight: '700',
        }],
      }

    },
  },
  plugins: [],
}
