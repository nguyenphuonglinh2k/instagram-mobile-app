import React from "react";
/**
 * @format
 */

// Ignore warning temporarily
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Require cycle: "]);
// console.disableYellowBox = true;

import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "reduxStore";
import App from "./App";
import { name as appName } from "./app.json";

const RNApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNApp);
