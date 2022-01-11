module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Roboto: ['Roboto Mono', 'monospace']
      },
      backgroundImage: {
        salzburg: "url('/backgrounds/salzburg.jpg')",
        coffee: "url('/backgrounds/coffee-wall.jpg')",
        leaf: "url('/backgrounds/leaf.jpeg')"
      }
    }
  },
  plugins: []
};
