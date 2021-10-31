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
};

module.exports = config;