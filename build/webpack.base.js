const { resolve } = require("path")

module.exports = {
    output: {
        path: resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js(x)/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'], // !处理后缀
        // alias: {
        //     '@pages': path.join(__dirname, "..", "src", "pages"), // !处理路径
        // }
    }
}