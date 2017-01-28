module.exports = {
  entry: {
    app: './src/index.jsx',
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
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-react',
          ]
        },
      },
    ],
  },

  output: {
    filename: 'bundle.js',
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
};
