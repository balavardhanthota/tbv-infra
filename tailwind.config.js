/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefbf3',
          100: '#d6f5e3',
          200: '#b0eacc',
          300: '#7dd8ad',
          400: '#47bf8c',
          500: '#2ca772',
          600: '#1d875b',
          700: '#1a6c4b',
          800: '#19563d',
          900: '#174834',
          950: '#0a2a1f',
        },
        secondary: {
          50: '#eef8ff',
          100: '#d9eeff',
          200: '#bce1ff',
          300: '#8eceff',
          400: '#59b2ff',
          500: '#3492fb',
          600: '#1f73f0',
          700: '#195bde',
          800: '#1c4ab4',
          900: '#1c408e',
          950: '#152a59',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc170',
          400: '#ff9d36',
          500: '#ff810d',
          600: '#ff6504',
          700: '#cc4702',
          800: '#a13808',
          900: '#82310b',
          950: '#461604',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};