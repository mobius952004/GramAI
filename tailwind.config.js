/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d', // Deep Blue
          light: '#2a4365',
          dark: '#102a43',
        },
        secondary: {
          DEFAULT: '#38a169', // Green
          light: '#48bb78',
          dark: '#2f855a',
        },
        warning: {
          DEFAULT: '#ed8936', // Orange/Amber
          light: '#f6ad55',
          dark: '#dd6b20',
        },
        neutral: {
          bg: '#f7fafc',
          card: '#ffffff',
          text: '#2d3748',
          muted: '#718096',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
