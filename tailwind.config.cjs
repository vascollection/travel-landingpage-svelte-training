/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      // fontFamily: {
      //   inter: ['Inter', 'sans-serif'],
      // },
      // fontSize: {
      //   xxl: '72px',
      //   xl: '60px',
      //   lg: '48px',
      //   md: '36px',
      //   sm: '30px',
      //   xs: '24px',
      // },
      // fontWeight: {
      //   // light: '300',
      //   regular: '400',
      //   medium: '500',
      //   semibold: '600',
      //   bold: '700',
      // },
      // lineHeight: {
      //   xxl: '90px',
      //   xl: '72px',
      //   lg: '60px',
      //   md: '44px',
      //   sm: '38px',
      //   xs: '32px',
      // },
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      },
      // typography: (theme) => ({
      //   default: {
      //     css: {
      //       h1: {
      //         fontFamily: theme('fontFamily.inter'),
      //         fontSize: theme('fontSize.xxl'),
      //         fontWeight: theme('fontWeight.bold'),
      //         lineHeight: theme('lineHeight.xxl'),
      //       },
      //     }
      //   }
      // }),
    },
    container: {
      screens: {
        xl: '1216px',
      },
    }
  }
};

module.exports = config;