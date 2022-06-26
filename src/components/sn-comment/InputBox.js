import React, { memo } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FaceIcon } from "icons";

const InputBox = ({ style, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <TouchableOpacity>
        <FaceIcon />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholderTextColor="#3A4664B2"
        placeholder="Write comment here"
        multiline
      />
    </View>
  );
};

InputBox.propTypes = {
  style: PropTypes.object,
};

InputBox.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#C4C4C4",
  },
  input: {
    flex: 1,
    backgroundColor: "rgba(196, 196, 196, 0.35)",
    paddingHorizontal: 16,
    borderRadius: 30,
    maxHeight: 75,
    overflow: "hidden",
    marginLeft: 8,
  },
});

export default memo(InputBox);
