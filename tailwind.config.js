module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        portfolio: '#251170',
        line: '##eb83f8'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
