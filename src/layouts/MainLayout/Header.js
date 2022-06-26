import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image } from "react-native";
import { ImageSource } from "assets";

const Header = ({ headerRight }) => {
  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={ImageSource.LogoImage} />
      {headerRight}
    </View>
  );
};

Header.propTypes = {
  headerRight: PropTypes.node,
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
