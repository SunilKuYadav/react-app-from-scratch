const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loder", "css-loader"]
            }
        ]
    },
}