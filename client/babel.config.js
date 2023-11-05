module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      test: {
        plugins: [["@babel/plugin-transform-modules-commonjs", { loose: true }]],
      },
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      // Required for expo-router
      "expo-router/babel",
    ],
  };
};
