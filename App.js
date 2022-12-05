import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { ToastProvider } from "react-native-toast-notifications";
import TabNavigation from "navigation/TabNavigator";
import { AuthStack } from "navigation/StackNavigator";
import { navigationRef } from "navigation/RootNavigation";
import { SplashScreen } from "screens";
import clientStorage from "utils/clientStorage";
import { AppConstant } from "const";
import { LoadingSpinner } from "components";
import { useDispatch, useSelector } from "react-redux";
import AuthActions from "reduxStore/auth.redux";

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

  const isLoggedIn = useSelector(({ authRedux }) => authRedux.isLoggedIn);

  const isFetching = useSelector(
    ({ appRedux, userRedux, authRedux }) =>
      appRedux.isFetching || userRedux.isFetching || authRedux.isFetching,
  );

  // const getToken = useCallback(async () => {
  //   const token = await clientStorage.get(AppConstant.AUTH_TOKEN_KEY);
  //   const user = await clientStorage.get(AppConstant.USER_KEY);

  //   dispatch(
  //     AuthActions.authSuccess({
  //       user: JSON.parse(user),
  //       token,
  //       isLoggedIn: Boolean(token),
  //     }),
  //   );
  // }, [dispatch]);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplash(false);
    }, 700);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <ToastProvider
        swipeEnabled
        duration={2000}
        placement="top"
        animationType="slide-in"
      >
        <NavigationContainer theme={navTheme} ref={navigationRef}>
          {splash ? (
            <SplashScreen />
          ) : isLoggedIn ? (
            <TabNavigation />
          ) : (
            <AuthStack />
          )}
          <LoadingSpinner isVisible={isFetching} />
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
