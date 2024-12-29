
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'logo':'url(../assets/logo.png)',
        'main': 'url(../assets/bgMain.png)',
        'header': 'url(../assets/header.png)',
        'experience':'url(../assets/Subtract.png)',
        'app':'url(../assets/Rectangle 59.png)',
        'line':'url("../assets/path.png")',
      },
      colors:{
        'dark-blue':"rgba(26, 29, 38, 1)",
        'app-orange':'rgba(255, 201, 120, 0.884)',
        'app-gray':'rgba(11, 14, 23, 0.4)',
        'app-gray-1':'rgba(171, 174, 183, 1)',
        'app-black':'rgba(11, 14, 23, 1)',
      }
    }
  },
  plugins: [
    function ({ addComponents, theme }) {
      const containers = {
        '.container1': {
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 1rem'
        },
        '@screen sm': {
          '.container1': {
            maxWidth: '640px',
          },
        },
        '@screen md': {
          '.container1': {
            maxWidth: '640px',
          },
        },
        '@screen lg': {
          '.container1': {
            maxWidth: '768px',
          },
        },
        '@screen xl': {
          '.container1': {
            maxWidth: '1024px',
          },
        },
        '@screen 2xl': {
          '.container1': {
            maxWidth: '1280px',
          },
        },
      };
      addComponents(containers);
    },
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}