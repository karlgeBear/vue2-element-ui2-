const path = require('path')

module.exports = {
  lintOnSave: false, // 关闭Eslint规则
  
  configureWebpack: { // 内部写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', 'json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}