import React, { useRef } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, Text } from "react-native";

const CommonTextInput = ({
  label,
  style,
  placeholder,
  labelProps,
  ...otherProps
}) => {
  const inputRef = useRef();
  const { style: labelStyle, ...otherLabelProps } = labelProps;

  return (
    <>
      {Boolean(label) && (
        <Text style={[styles.label, labelStyle]} {...otherLabelProps}>
          {label}
        </Text>
      )}
      <TextInput
        ref={inputRef}
        placeholderTextColor="rgba(58, 70, 100, 0.5)"
        style={[
          styles.input,
          inputRef.current?.isFocused() && styles.focused,
          style,
        ]}
        {...otherProps}
      />
    </>
  );
};

CommonTextInput.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  labelProps: PropTypes.shape({
    style: PropTypes.object,
  }),
};

CommonTextInput.defaultProps = {
  labelProps: { style: {} },
};

const styles = StyleSheet.create({
  input: {
    position: "relative",
    width: "100%",
    borderRadius: 15,
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 14,
    color: "#3A4664",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: "#C4C4C4",
    borderWidth: 1,
  },
  label: {
    marginBottom: 4,
    fontWeight: "700",
    color: "#3A4664",
    fontSize: 12,
  },
  focused: {
    borderColor: "#9796F0",
  },
});

export default CommonTextInput;
