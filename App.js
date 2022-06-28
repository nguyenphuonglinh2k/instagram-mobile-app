import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigation from "navigation/TabNavigator";
import { AuthStack } from "./src/navigation/StackNavigator";
import { SplashScreen } from "screens";
import clientStorage from "utils/clientStorage";
import { AppConstant } from "const";
import { Provider } from "react-redux";
import store from "reduxStore";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
    text: "#262626",
  },
};

const App = () => {
  const [splash, setSplash] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getToken = async () => {
    const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);

    setIsLoggedIn(token ? true : false);
  };

  useEffect(() => {
    getToken();

    const splashTimeout = setTimeout(() => {
      setSplash(false);
    }, 700);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <Provider store={store}>
          {splash ? (
            <SplashScreen />
          ) : isLoggedIn ? (
            <TabNavigation />
          ) : (
            <AuthStack />
          )}
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
