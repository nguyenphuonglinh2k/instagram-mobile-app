module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@const": "./const",
          "@assets": "./asset",
          "@navigation": "./navigation",
          "@screens": "./screens",
          "@utils": "./utils",
          "@components": "./components",
          "@icons": "./icons",
          "@reduxStore": "./reduxStore",
          "@sagas": "./sagas",
          "@services": "./services",
          "@layout": "./layout",
        },
      },
    ],
  ],
};
