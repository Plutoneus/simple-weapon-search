module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/global.scss";`
      }
    }
  }
}
