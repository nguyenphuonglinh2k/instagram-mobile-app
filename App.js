import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigation/TabNavigator";
import Signin from "./src/screens/auth/Signin/Title_Signin";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <TabNavigation /> */}
        <Signin />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
