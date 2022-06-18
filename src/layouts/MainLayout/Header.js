import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { NotificationIcon } from "icons";
import { ImageSource } from "assets";

const Header = () => {
  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={ImageSource.LogoImage} />
      <NotificationIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    height: 22,
    width: 75,
  },
});

export default Header;
