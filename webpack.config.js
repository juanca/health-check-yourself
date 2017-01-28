module.exports = {
  entry: {
    app: './src/index.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015']
        },
      },
    ],
  },

  output: {
    filename: 'bundle.js',
  }
};
