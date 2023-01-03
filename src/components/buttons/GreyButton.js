import React from "react";
import PropTypes from "prop-types";
import ContainedButton from "./ContainedButton";
import { StyleSheet } from "react-native";

const GreyButton = ({ label, ...otherProps }) => {
  return (
    <ContainedButton
      label={label}
      gradientProps={{ colors: ["#C4C4C459", "#C4C4C459"] }}
      labelProps={{ style: styles.label }}
      {...otherProps}
    />
  );
};

GreyButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  label: {
    color: "rgba(58, 70, 100, 0.7)",
  },
});

export default GreyButton;
