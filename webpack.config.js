const path = require('path');
const WebpackFavicons = require('webpack-favicons');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new WebpackFavicons({
      src: './src/img/anchor.svg',
      path: 'img',
      background: '#000',
      theme_color: '#000',
      icons: {
        favicons: true
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
},
};
