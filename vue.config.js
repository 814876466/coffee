// 项目的配置文件

module.exports = {
  devServer: {
    proxy: {
      // key: value 路径前缀：http-proxy-middleware相同的配置对象
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
