const defaults = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaults,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  // resolve:{
  //   fallback:{
  //     "crypto": require.resolve("crypto-browserify"),
  //     "os": require.resolve("os-browserify/browser"),
  //     "path": require.resolve("path-browserify"),
  //     "stream": require.resolve("stream-browserify"),
  //     "process": require.resolve("process/browser")

  //   }
  // }
};
