const path = require('path')
const Uglify = require('uglifyjs-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  // 入口文件配置项
  entry: {
    // main里面的可以根据项目改变
    main: './src/main.js'
  },
  // 出口文件配置项
  output: {
    // 打包的路径
    path: path.resolve(__dirname, '../dist'),
    // 打包的名称
    filename: '[name].js',
    publicPath: '../'
  },
  // 模块：例如css等
  module: {
    rules: [
      // css-loader
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // 这里可以指定一个 publicPath
            // 默认使用 webpackOptions.output中的publicPath
            publicPath: '../'
          }
        },
        'css-loader']
        // use: [
        //   { loader: 'style-loader' },
        //   { loader: 'css-loader' }
        // ]
      },
      // 图片loader
      {
        test: /\.(jpg|png|gig|jpeg|bmp)$/, // 是匹配图片文件后缀名称
        use: [
          {
            loader: 'url-loader', // 是指定使用的loader和loader的配置参数
            options: {
              limit: 500, // 是把小于500B的文件打成Base64的格式，写入JS
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  // 插件
  plugins: [
    new Uglify(),
    new HtmlPlugin({
      minify: { // 是对html文件进行压缩
        removeAttributeQuotes: true // removeAttrubuteQuotes是去掉属性的双引号
      },
      hash: true,
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[id].css'
    })
  ],
  // 配置服务器信息：例如开发环境、测试环境、准生产环境、生产环境等
  devServer: {
    // 设计基本目录结构
    contentBase: path.resolve(__dirname, '../dist'),
    // 服务器地址
    host: 'localhost',
    // 是否压缩
    compress: true,
    // 端口号
    port: 8888
  }
}
