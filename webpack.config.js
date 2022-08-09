module.exports = {
    entry: {
      index: './imgur.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: __dirname + '/dist',
    },
};
