const { resolve } = require("path")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin") //! 如遇见"@vue/compiler-sfc"则需配置此


const baseConfig = require("./webpack.base.js")
const devConfig = {
    mode: 'development',
    entry: resolve(__dirname, '../src/client/entry-client.jsx'),
    output: {
        filename: 'client-bundle.js'
    },
    devServer: {
        static: resolve(__dirname, '../dist'), //! 原contentBase
        port: 8888,
        historyApiFallback: true
    },
    module: {
        rules:
            [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({
            template: resolve(__dirname, '../src/client/index.template.html')
        })
    ]
}

module.exports = merge(baseConfig, devConfig)