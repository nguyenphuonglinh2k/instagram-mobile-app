import React from "react";
import PropTypes from "prop-types";
import { Modal, StyleSheet } from "react-native";

const CommonModal = ({
  children,
  visible,
  onRequestClose,
  style,
  ...otherProps
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
      style={[styles.wrapper, style]}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};

CommonModal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 328,
    margin: 16,
  },
});

export default CommonModal;
