module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms'
      },
      backgroundImage: {
        'day': "url('/src/Assets/components/switch/day.jpg')",
        'night': "url('/src/Assets/components/switch/night.jpg')",
        'sun': "url('/src/Assets/components/switch/sun.png')",
        'moon': "url('/src/Assets/components/switch/moon.png')",
      }
    },
  },
  plugins: [],
}
