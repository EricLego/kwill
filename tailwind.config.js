/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme (earth-toned) colors
        sand: {
          50: '#fbf8f1',
          100: '#f5f0e6',
          200: '#eee4d0',
          300: '#e6d7bc',
          400: '#d9c6a2',
          500: '#ccb688',
          600: '#bfa673',
          700: '#ad9051',
          800: '#8d744a',
          900: '#6d5c3f',
        },
        jade: {
          50: '#edf9f2',
          100: '#d5f1e2',
          200: '#aee3c5',
          300: '#7ed2a7',
          400: '#4dbd88',
          500: '#37a46f',
          600: '#2c8659',
          700: '#266c49',
          800: '#22563c',
          900: '#1e4733',
        },
        // Dark theme (night-toned) colors
        night: {
          50: '#f5f7fa',
          100: '#e6e9f0',
          200: '#c5cde0',
          300: '#9fa8c9',
          400: '#7c84ae',
          500: '#646f98',
          600: '#4d557b',
          700: '#3b4161',
          800: '#282c45',
          900: '#1a1c30',
          950: '#0d0e1a',
        },
        teal: {
          50: '#effefa',
          100: '#c7fff2',
          200: '#94f8e5',
          300: '#67ecd7',
          400: '#39d5c2',
          500: '#18b3a1',
          600: '#0d8f85',
          700: '#0c726c',
          800: '#0d5956',
          900: '#0e4947',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.04)',
        'medium': '0 6px 18px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 25px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      spacing: {
        '18': '4.5rem',
      },
      fontSize: {
        'xxl': '1.375rem',
      }
    },
  },
  plugins: [],
}

