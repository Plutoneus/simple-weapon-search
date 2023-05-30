module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/global.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/simple-weapon-search/'
  : '/'
}
