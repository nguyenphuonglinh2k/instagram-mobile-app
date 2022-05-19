module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "avoid",
        semi: true,
        trailingComma: "all",
        endOfLine: "auto",
        singleQuote: false,
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
        parser: "flow",
      },
    ],
    "react/jsx-filename-extension": "off",
    "react-native/no-inline-styles": "off",
    "react/prop-types": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prefer-const": "error",
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["error"] }],
    //You can override any rules you want
  },
};
