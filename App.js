import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";
import TabNavigation from "navigation/TabNavigator";
import { AuthStack } from "./src/navigation/StackNavigator";
import { SplashScreen } from "screens";
import clientStorage from "utils/clientStorage";
import { AppConstant } from "const";
import { useDispatch, useSelector } from "react-redux";
import AppActions from "reduxStore/app.redux";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
    text: "#262626",
  },
};

const App = () => {
  const dispatch = useDispatch();
  const [splash, setSplash] = useState(true);

  const isLoggedIn = useSelector(({ appRedux }) => appRedux.isLoggedIn);

  const getToken = useCallback(async () => {
    const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);
    const user = await clientStorage.get(AppConstant.USER_KEY);

    dispatch(
      AppActions.appSuccess({
        user: JSON.parse(user),
        token,
        isLoggedIn: Boolean(token),
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    getToken();

    const splashTimeout = setTimeout(() => {
      setSplash(false);
    }, 700);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, [getToken]);

  return (
    <SafeAreaProvider>
      <ToastProvider
        swipeEnabled
        duration={3000}
        placement="top"
        animationType="slide-in"
      >
        <NavigationContainer theme={navTheme}>
          {splash ? (
            <SplashScreen />
          ) : isLoggedIn ? (
            <TabNavigation />
          ) : (
            <AuthStack />
          )}
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
