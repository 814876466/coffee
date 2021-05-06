module.exports = {
  plugins: {
    autoprefixer: {
    },

    'postcss-pxtorem': {
      // 1rem = 37.5px
      // xrem = 44px
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
