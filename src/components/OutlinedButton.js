import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { ContainedButton } from "components";

const OutlinedButton = ({
  label,
  style,
  labelWrapperProps,
  labelProps,
  ...otherProps
}) => {
  const { style: labelStyle, ...otherLabelProps } = labelProps;
  const { style: labelWrapperStyle, ...otherLabelWrapperProps } =
    labelWrapperProps;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.wrapper, style]}
      {...otherProps}
    >
      <ContainedButton label="" style={styles.borderGradient} />
      <View
        style={[styles.labelWrapper, labelWrapperStyle]}
        {...otherLabelWrapperProps}
      >
        <Text style={[styles.text, labelStyle]} {...otherLabelProps}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

OutlinedButton.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  labelProps: PropTypes.shape({
    style: PropTypes.object,
  }),
  labelWrapperProps: PropTypes.shape({
    style: PropTypes.object,
  }),
};

OutlinedButton.defaultProps = {
  style: {},
  labelProps: { style: {} },
  labelWrapperProps: { style: {} },
};

export default OutlinedButton;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    height: 40,
    width: "100%",
  },
  borderGradient: {
    position: "absolute",
    borderRadius: 30,
    top: 0,
    left: 0,
    zIndex: -1,
    height: "100%",
    width: "100%",
    minWidth: "100%",
  },
  labelWrapper: {
    backgroundColor: "white",
    position: "absolute",
    top: 1,
    left: 1,
    height: 37,
    width: "99%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#BEA9E5",
    fontWeight: "700",
  },
});
