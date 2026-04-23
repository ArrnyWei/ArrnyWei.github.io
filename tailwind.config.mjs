import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ORIGI logo 綠色主色（取自公司簡介 logo，若有精確色碼請替換）
        primary: {
          50: '#f2f9f5',
          100: '#dcefe4',
          200: '#b9dec9',
          300: '#8fc8a8',
          400: '#6fba8a', // logo 主綠
          500: '#55a573',
          600: '#45895d',
          700: '#396e4c',
          800: '#2f5940',
          900: '#203d2c',
        },
        // 輔色青綠（取自公司簡介頁尾箭頭元件）
        accent: {
          DEFAULT: '#2ca8a5',
          light: '#5cc3c1',
          dark: '#1e8885',
        },
        // 中性色用於文字
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
