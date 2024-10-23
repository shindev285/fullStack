// config-overrides.js
const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),  // Alias '@' trỏ tới thư mục 'src'
  };
  return config;
};
