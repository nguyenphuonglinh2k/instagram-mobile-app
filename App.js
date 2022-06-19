import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigation from "navigation/TabNavigator";
import { AuthStack } from "./src/navigation/StackNavigator";
import { SplashScreen } from "screens";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

const App = () => {
  const [splash, setSplash] = useState(true);

  const isLoggedIn = true;

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
      <NavigationContainer theme={navTheme}>
        {splash ? (
          <SplashScreen />
        ) : isLoggedIn ? (
          <TabNavigation />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
