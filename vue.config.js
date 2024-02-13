const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        // 在这里定义全局变量  
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(process.env.NODE_ENV !== 'production')
      })
    ]
  }
})
