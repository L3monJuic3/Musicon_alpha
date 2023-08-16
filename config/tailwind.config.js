const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      'purple': '#3f3cbb',
      'grey-custom': '#727070',
      'white-custom': '#F9F9F9',
      'dark-grey-custom': '#3C3B3B',
      'light-grey-custom': '#DDDBDB',
      'yellow-custom': '#EEBF24',
      'light-yellow-custom': '#FEF9EC',
      'black-custom': '#101011',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
