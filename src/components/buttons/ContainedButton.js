import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ContainedButton = ({
  label,
  onPress,
  style,
  labelProps,
  gradientProps,
  disabled,
  ...otherProps
}) => {
  const { style: labelStyle, ...otherLabelProps } = labelProps;
  const { style: gradientStyle, ...otherGradientProps } = gradientProps;

  return (
    <TouchableOpacity
      onPress={!disabled && onPress}
      activeOpacity={0.5}
      style={[{ width: 160 }, style]}
      {...otherProps}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.75]}
        colors={["#9796F0", "#FBC7D4"]}
        style={[
          { opacity: disabled ? 0.4 : 1 },
          defaultStyles.linearGradient,
          gradientStyle,
        ]}
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
    width: "100%",
  },
});

export default ContainedButton;

ContainedButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  labelProps: PropTypes.shape({
    style: PropTypes.object,
  }),
  gradientProps: PropTypes.shape({
    style: PropTypes.object,
  }),
  disabled: PropTypes.bool,
};

ContainedButton.defaultProps = {
  labelProps: { style: {} },
  gradientProps: { style: {} },
  style: {},
};
