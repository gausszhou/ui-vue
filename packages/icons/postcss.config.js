const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    postcssImport(),
    postcssUrl({ url: "inline" }),
    cssnano({ preset: "default" }),
  ],
};