import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ContainedButton = ({
  label,
  onPress,
  labelProps,
  gradientProps,
  ...otherProps
}) => {
  const { style: labelStyle, ...otherLabelProps } = labelProps;
  const { style: gradientStyle, ...otherGradientProps } = gradientProps;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} {...otherProps}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.75]}
        colors={["#9796F0", "#FBC7D4"]}
        style={[defaultStyles.linearGradient, gradientStyle]}
        {...otherGradientProps}
      >
        <Text style={[defaultStyles.label, labelStyle]} {...otherLabelProps}>
          {label}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const defaultStyles = StyleSheet.create({
  label: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "700",
  },
  linearGradient: {
    borderRadius: 30,
    overflow: "hidden",
    width: 160,
  },
});

export default ContainedButton;

ContainedButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  labelProps: PropTypes.shape({
    style: PropTypes.object,
  }),
  gradientProps: PropTypes.shape({
    style: PropTypes.object,
  }),
};

ContainedButton.defaultProps = {
  labelProps: { style: {} },
  gradientProps: { style: {} },
};
