const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve("dist"),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
            }
        ]
    }
}