module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hot-or-not/'
    : '/',
    
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import \"~@/scss/_include.scss\";",
      },
    },
  },
};
