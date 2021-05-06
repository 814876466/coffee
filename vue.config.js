
module.exports = {
  devServer: {
    proxy: {
      '/test': {
        target: 'http://manhua.weibo.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/test': ''
        }
      }
    }
  }
}
