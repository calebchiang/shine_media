module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      fontWeight: {
        'normal': '400',
        'bold': '700'
      }
    },
  },
  variants: {},
  plugins: [],
};
