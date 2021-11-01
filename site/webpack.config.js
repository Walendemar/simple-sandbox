const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
    build: path.resolve(__dirname, 'public/build'),
};

const config = {
    mode: 'development',
    entry: {
        app: PATHS.app,
    },
    output: {
        filename: `[name].js`,
        path: PATHS.build,
        publicPath: PATHS.public,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                    require.resolve('postcss-loader'),
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    compact: false,
                    cacheCompression: false,
                    cacheDirectory: true,
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Сайт',
            template: path.resolve(__dirname, 'templates/template.html'),
            filename: path.resolve(__dirname, 'public/build/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules'],
        alias: {
            '@components': path.resolve(PATHS.app, 'components'),
        },
    },
    devServer: {
        static: {
            directory: PATHS.build,
        },
        compress: true,
        port: '8070',
        historyApiFallback: {
            disableDotRule: true,
        },
        
        hot: true,
    },
};

module.exports = config;