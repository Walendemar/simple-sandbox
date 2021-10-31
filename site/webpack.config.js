const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
    build: path.resolve(__dirname, 'public/build'),
};

const config = {
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
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
          { test: /\.(js)$/, use: 'babel-loader' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Сайт',
            template: path.resolve(__dirname, 'templates/template.html'),
            filename: path.resolve(__dirname, 'public/build/index.html'),
        }),
    ],
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