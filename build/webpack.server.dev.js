// webpack-node-externals: 不让第三方依赖打包到输出文件中

const { resolve } = require("path")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const nodeExternals = require("webpack-node-externals")

const baseConfig = require("./webpack.base.js")
const serverConfig = {
    mode: 'development',
    entry: resolve(__dirname, '../src/client/entry-server.jsx'),
    output: {
        filename: 'server-bundle.js',
        libraryTarget: "commonjs2" //! 指定编译规则
    },
    // 制定环境
    target: 'node',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }]
    },
    externals: nodeExternals(), // !不让第三方依赖打包到输出文件中
    module: {
        rules:
            [
                {
                    test: /\.css$/,
                    use: ["ignore-loader"]// 忽略掉 null-loader
                }
            ]
    },
}

module.exports = merge(baseConfig, serverConfig)