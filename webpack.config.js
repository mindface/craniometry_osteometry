
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const Autoprefixer = require('autoprefixer')

const MODE = "production";
const enabledSourceMap = MODE === "development";

module.exports =  {
    mode: 'development',
    entry:{
      bundle: './packs/js/index.js',
      global: './packs/sass/index.sass'
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, './src/assets'),
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
                presets: [
                  "@babel/preset-env"
                ]
              }
           }
        ],
       },
       {
        test: /\.css$/,
        use:[
            "style-loader",
            {
               loader: 'css-loader',
               options: { 
                 url: false,
               },
             }
          ]
       },
       {
        test: /\.sass$/,
        use:[
           {
            loader: "style-loader",
           },
            {
               loader: 'css-loader',
               options: { 
                 url: false,
                 sourceMap: true,
                 importLoaders: 2
               },
             },
             {
              loader: 'postcss-loader',
                options: { 
                  postcssOptions: {
                    plugins:[
                      ["autoprefixer", { grid: true }]
                    ]
                  }
                }
              },
             {
               loader: 'sass-loader',
            },
          ]
       }
      //  ,{
      //   test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      //   use:[{
      //    loader: 'url-loader?limit=100000&name=img/[name].[ext],'
      //   }]
      //  }
      ]
    },
    optimization:{
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin(),
        new UglifyjsWebpackPlugin()
      ]
    },
    plugins: [
      // new CopyWebpackPlugin([{
      //   patterns: [
      //     { from: './packs/images/', to: './src/assets/images' },
      //   ],
      // }]),
      new MiniCssExtractPlugin({
        filename: "./pack/[name].css"
      })
    ],
    // resolve: {
    //   extensions: [".js", ".json"]
    // },
    target: ["web","es5"]
};