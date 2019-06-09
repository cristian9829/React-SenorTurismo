const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('dist') ,
    filename: "bundler.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      { 
        test: /\.(woff|woff2|eot|ttf|svg)$/, 
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      },
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use : {
          loader: 'babel-loader'
        }
      },
      { 
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;