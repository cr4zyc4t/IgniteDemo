module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@babel/plugin-proposal-decorators",
        {
          legacy: true,
        },
      ],
      "@babel/plugin-proposal-optional-catch-binding",
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin", // NOTE: this must be last in the plugins
    ],
  };
};
