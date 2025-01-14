/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'float-1': {
          '0%, 100%': { transform: 'translate(-100%, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-120%, -20px) rotate(45deg)' }
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(100%, 0) rotate(0deg)' },
          '50%': { transform: 'translate(120%, -30px) rotate(-45deg)' }
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(-100%, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-130%, 20px) rotate(-30deg)' }
        },
        'float-4': {
          '0%, 100%': { transform: 'translate(100%, 0) rotate(0deg)' },
          '50%': { transform: 'translate(130%, 30px) rotate(30deg)' }
        }
      },
      animation: {
        'float-1': 'float-1 3s ease-in-out infinite',
        'float-2': 'float-2 2.5s ease-in-out infinite',
        'float-3': 'float-3 3.5s ease-in-out infinite',
        'float-4': 'float-4 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};