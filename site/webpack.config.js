const path = require('path');

const config = {
    entry: {
        app: path.join(__dirname, 'src'),
    },
    output: {
        filename: `[name].js`,
        path: path.resolve(__dirname, 'public/build'),
    },
};

module.exports = config;