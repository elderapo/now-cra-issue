const { override } = require("customize-cra");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const addTsconfigPathsPlugin = () => config => {
  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      configFile: path.join(__dirname, "tsconfig-paths.json")
    })
  );

  return config;
};

module.exports = override(addTsconfigPathsPlugin());
