/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '70': '70%',
        '28': '28%',
      },
      colors: {
        'ocean': '#5f44f2',
        'ocean-50': '#3531df',
        'ocean-100': '#452eca',
        'ocean-150': '#4437e1',
        'ocean-200': '#d7cbfb',
        'ocean-300': '#bebed2',
        'ocean-400': '#6f6d74',
        'black-100': '#01001f',
        'orange-10': '#dfac60',
        'sun': '#de6759',
        'sun-200': '#ffe3dd',
        'hijau': '#609EA2',
        'radial': '#1f1e6a',
        'radial-100': '#9873e5',
        'radial-200': '#7849bb',
      }
    },
  },
  plugins: [],
}

