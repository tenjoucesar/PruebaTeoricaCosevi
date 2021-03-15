module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    "plugins": [
      "react-native-reanimated/plugin",
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          "Navigation": "./navigation",
          "Screens": "./screens",
          "Images": "./images",
          "Components": "./components",
          "Root": "./"
        }
      },]
    ]
  }
};
