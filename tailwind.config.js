module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      colors: {
        'primary-blue': '#1B4DB1',
        'primary-yellow': '#F3F243',
        'primary-pink': '#FF64BC',
        'primary-black': '#000000',
        'primary-blackLight': '#1A1E2E',
        'primary-grayDark': '#6E6A6C',
        'primary-gray': '#A7A6A7',
        'primary-grayLight': '#D9D9D9',
        'primary-grayLighter': '#F8F7FA',
        'secondary-red': '#EF3F47',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        'title-1': '900',
        'title-2': '500',
        'title-3': '600',
        'subtitle-1': '500',
        'subtitle-2': '400',
        'texto-1': '400',
        'texto-2': '500',
      },
      fontSize: {
        'title-1': '48px',
        'title-2': '24px',
        'title-3': '20px',
        'subtitle-1': '16px',
        'subtitle-2': '16px',
        'texto-1': '15px',
        'texto-2': '14px',
      },
      fontStyle: {
        italic: 'italic',
        normal: 'not italic',
      },
      lineHeight: {
        'title-1': '56px',
        'title-2': '28px',
        'title-3': '23px',
        'subtitle-1': '19px',
        'subtitle-2': '19px',
        'texto-1': '18px',
        'texto-2': '16px',
      },
      dropShadow: {
        shadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
