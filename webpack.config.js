var webpack = require("webpack");
var path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",
  entry: "./_javascript/app.ts",

  output: {
    publicPath: "/assets/",
    path: path.join(__dirname,"assets"),
    filename: "app.js"
  },

  resolve: {
    extensions: [".js",".ts",'.vue', '.json'],
    alias: {
        vue: 'vue/dist/vue.js'
      }
  },

  // source map
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.vue$/,
        include: [/_javascript/],
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        // Exclude node modules and jekyll stuff
        include: [/_javascript/],
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.scss$/,
        include: [/_javascript/],
        exclude: [/_sass/,/assets/],
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }/*,
      {
        test: /\.html$/,
        // Exclude node modules and jekyll stuff
        exclude: [/node_modules/,/_includes/,/_layouts/,/_posts/,/_sass/,/_site/,/css/],
        loader: 'raw-loader'
      }*/
    ]
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
    new VueLoaderPlugin()
  ]
};
