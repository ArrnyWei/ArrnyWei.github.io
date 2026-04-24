import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ORIGI 主色：以 #5FA684 為 500 延伸
        primary: {
          50: '#f1f7f3',
          100: '#d8ebe0',
          200: '#b5d7c4',
          300: '#88bea1',
          400: '#6fab8a',
          500: '#5fa684', // logo 主色
          600: '#4d8a6a',
          700: '#3f7055',
          800: '#325843',
          900: '#224030',
        },
        // ORIGI 輔助色：#F8F4E8 暖米白
        cream: {
          50: '#fcfaf3',
          100: '#f8f4e8', // 主米白
          200: '#f0e9d0',
          300: '#e3d7a5',
          400: '#d3c278',
        },
        // 中性色
        ink: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d5d9df',
          300: '#aeb5bf',
          400: '#7f8899',
          500: '#5a6373',
          600: '#434a57',
          700: '#353a45',
          800: '#252932',
          900: '#161921',
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans TC"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [typography],
};
