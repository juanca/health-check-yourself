module.exports = {
  entry: {
    app: './src/index.jsx',
  },

  module: {
    loaders: [{
      include: /src/,
      loader: 'babel-loader',
      query: {
        presets: [
          'babel-preset-es2015'
        ],
      },
      test: /\.js$/,
    }, {
      include: /src/,
      loader: 'babel-loader',
      query: {
        presets: [
          'babel-preset-es2015',
          'babel-preset-react',
        ],
      },
      test: /\.jsx$/,
    }, {
      include: /src/,
      loaders: [
        'style-loader',
        'css-loader'
      ],
      test: /\.css$/,
    }, {
      loader: 'svg-sprite',
      query: {
        name: '[name]_[hash]',
      },
      test: /\.svg$/,
    }],
  },

  output: {
    filename: 'bundle.js',
  },
};
