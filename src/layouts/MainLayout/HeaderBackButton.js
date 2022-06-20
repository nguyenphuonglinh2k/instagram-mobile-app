import React from "react";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowIcon } from "icons";

const HeaderBackButton = ({ headerRight, style, ...otherProps }) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <TouchableOpacity onPress={onGoBack}>
        <ArrowIcon />
      </TouchableOpacity>
      {headerRight}
    </View>
  );
};

HeaderBackButton.propTypes = {
  headerRight: PropTypes.node,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
  },
  arrowIcon: {},
});

export default HeaderBackButton;
