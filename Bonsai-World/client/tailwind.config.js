/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '7xl': '80rem',
      },
      // backgroundImage: {
      //   'hero-pattern': "url('./src/assets/home.jpg')",
      // },
      clipPath: {
        'custom-clip': 'circle(61.6% at 87% 1%)',
      }
    },
    fontFamily: {
      'hero': ['Rozha One', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function({ addUtilities }) {
      addUtilities({
        '.clip-custom-clip': {
          'clip-path': 'circle(61.6% at 87% 1%)',
        },
      }, ['responsive', 'hover']);
    }
  ],
}

