import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

const TextButton = ({ onPress, label, labelProps, ...otherProps }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} {...otherProps}>
      <Text {...labelProps}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

TextButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  labelProps: PropTypes.object,
};
