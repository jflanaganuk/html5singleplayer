var path = require('path');
module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    }
};