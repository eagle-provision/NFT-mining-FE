module.exports = {
  important: true,
  purge: [],
  darkMode: false,
  

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/style.scss";`,
      },
      css: {
        additionalData: `@import "@/assets/css/owl.carousel.min.css";`,
        additionalData: `@import "@/assets/css/slick.css";`,
      },
    },
  },

  theme: {
    extend: {


      fontSize: {
        'xxs': '0.625rem',
        '3/2xl': '1.375rem',
      },
      textColor: {
        'dark': '#212121',
        'primary': '#4489FE',
        'lightprimary': '#E9F0FD',
        'whiteprimary': '#F8FAFF',
      },
      backgroundColor: {
        'dark': '#212121',
        'primary': '#4489FE',
        'lightprimary': '#E9F0FD',
        'whiteprimary': '#F8FAFF',
      },
      borderColor: {
        'dark': '#212121',
        'primary': '#4489FE',
        'lightprimary': '#E9F0FD',
        'whiteprimary': '#F8FAFF',
      },
      minWidth: {
        'screen-md': '768px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
