const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const MiniCssExtractPlugin   = require("mini-css-extract-plugin");
const {resolve} = require("@babel/core/lib/vendor/import-meta-resolve");

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseHref = "/";
const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist'),
   filename: '[name].[contenthash].js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    //host: '0.0.0.0',//your ip address
    //port: 49,
    //allowedHosts: 'all'
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser
 module: {
   rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /nodeModules/,
           use: {
             loader: 'babel-loader'
           }
         },
        {
            test: /\.s([ac])ss$/,
            exclude: /node_modules/,
            use: [
                production ? MiniCssExtractPlugin.loader : 'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: !production
                    },
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: !production
                    },
                },
            ],
        },
       // {
       //    test: /\.(css|pcss)$/,
       //    use: [
       //      {
       //        loader: 'css-loader',
       //        options: {
       //          importLoaders: 1,
       //        },
       //      },
       //      {
       //        loader: 'postcss-loader',
       //        options: {
       //          plugins: () => [
       //            require('postcss-import')({
       //              addModulesDirectories: [path.resolve(__dirname, '../src/styles')],
       //            }),
       //            require('postcss-cssnext')({
       //              warnForDuplicates: false,
       //            }),
       //            require('postcss-nested')(),
       //            require('postcss-color-function')(),
       //            require('cssnano')(),
       //          ],
       //          build: { autoprefixer: false },
       //        },
       //      },
       //    ],
       //  },
        {
            test: /\.css|p(ost)?css$/i,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ],
        },
        // {
        //     test: /\.pcss$/i,
        //     use: [{
        //         loader: 'postcss-loader',
        //         // options: {
        //         //     postcssOptions: {
        //         //         plugins: () => [
        //         //             require("autoprefixer")()
        //         //           ],
        //         //     }
        //         //
        //         // },
        //         options: {
        //             postcssOptions: {
        //                 plugins: () => [
        //                     require('postcss-import')({
        //                         addModulesDirectories: [path.resolve(__dirname, 'src/styles')],
        //                     }),
        //                     require('postcss-cssnext')({
        //                         warnForDuplicates: false,
        //                     }),
        //                     require('postcss-nested')(),
        //                     require('postcss-color-function')(),
        //                     require('cssnano')(),
        //                     require("autoprefixer")()
        //                 ],
        //                 minimize: false,
        //             },
        //         }
        //     }],
        // },

        {
            test: /\.(jpeg|jpg|gif|png|woff|woff2|ttf|eot|wav|mp3)$/,
            loader: 'file-loader',
        },
        {
            test: /\.svg$/,
            use: [{ loader: 'svg-sprite-loader' }],
        },
   ]
 },
 plugins: [
     new HtmlWebpackPlugin({ template: './public/index.html', /* favicon: "./public/favicon-voa.ico" */ }),
     new BaseHrefWebpackPlugin({baseHref: baseHref}),
 ],
    mode: production ? 'production' : 'development',
}