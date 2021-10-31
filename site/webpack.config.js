const path = require('path');

const config = {
    entry: {
        app: path.join(__dirname, 'src'),
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, 'public/build'),
    },
    module: {
        rules: [
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public/build'),
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