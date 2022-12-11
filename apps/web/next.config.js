const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["nativewind", "ui"]);
const { withExpo } = require("@expo/next-adapter");

module.exports = withPlugins([withTM, withExpo], {
  reactStrictMode: true,
  webpack5: true,
});
