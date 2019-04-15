const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isProductionBuild = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    app: './frontend/app/app.js',
  },
  output: {
    filename: isProductionBuild
      ? '[name].[hash].js'
      : '[name].js',
    chunkFilename: isProductionBuild
      ? '[id].[hash].js'
      : '[id].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src'],
          minimize: isProductionBuild,
          removeComments: isProductionBuild,
          collapseWhitespace: isProductionBuild
        }
      }
    }, {
      test: /\.(pug|jade)$/,
      exclude: /(node_modules|bower_components|frontend\/components)/,
      use: [{
        loader: 'pug-lint-loader',
        options: {
          disallowAttributeInterpolation: true,
          disallowLegacyMixinCall: true,
          validateExtensions: true,
          validateIndentation: 2
        }
      }]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components|frontend\/components)/,
      use: [{
        loader: 'ng-annotate-loader',
        options: {
          ngAnnotate: "ng-annotate-patched",
          es6: true,
          dynamicImport: true,
          explicitOnly: false
        }
      }, {
        loader: 'babel-loader'
      }, {
        loader: `eslint-loader`,
        options: {
          fix: false
        }
      }]
    }, {
      test: /\.(le|c)ss$/,
      use: [{
        loader: isProductionBuild
          ? MiniCssExtractPlugin.loader
          : 'style-loader'
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1
        }
      }, {
        loader: "postcss-loader",
        options: {
          sourceMap: true,
          plugins: [
            require('autoprefixer')({
              browsers: [
                'last 5 version',
                'ie >= 11',
                'Firefox ESR',
                'Firefox >= 38',
                'Edge >= 38'
              ]
            })
          ]
        }
      }, {
        loader: "less-loader",
        options: {
          sourceMap: true,
          includePaths: [
            "./frontend/component",
            "./bower_components"
          ]
        }
      }]
    }, {
      test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css"
    }),
    new ImageminPlugin({
      maxFileSize: 10000, // Only apply this one to files equal to or under 10kb
      disable: !isProductionBuild,
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      pngquant: {
        quality: '95-100'
      },
      jpegtran: {
        progressive: false
      },
      gifsicle: {
        interlaced: false,
        optimizationLevel: 1
      },
      svgo: {
        /* Available plugins for optimization: https://github.com/svg/svgo#what-it-can-do
           plugins:[]
        */
      }
    }),
    new ImageminPlugin({
      minFileSize: 10000, // Only apply this one to files over 10kb
      disable: !isProductionBuild,
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      pngquant: {
        quality: '95-100'
      },
      jpegtran: {
        progressive: true
      },
      gifsicle: {
        interlaced: true,
        optimizationLevel: 1
      },
      svgo: {}
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: isProductionBuild
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default']
        },
        canPrint: true
      })
    ]
  }
};
