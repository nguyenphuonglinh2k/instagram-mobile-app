import { ImageSource } from "assets";
import React from "react";
import { View, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={ImageSource.SplashScreenImage}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default SplashScreen;
