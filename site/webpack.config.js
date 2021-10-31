const path = require('path');

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
        ]
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