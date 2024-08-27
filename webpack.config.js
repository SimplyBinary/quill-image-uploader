const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [{
    entry: {
        "quill.imageUploader": "./src/dist.js",
        demo: "./demo/demo.js",
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        https: true,
    },
    externals: {
        quill: "Quill",
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                parallel: true,
                terserOptions: {
                    compress: true,
                    sourceMap: true,
                }
            }),
        ],
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use:  [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '../dist/quill.imageUploader.min.css' }),
    ],
}, ];
