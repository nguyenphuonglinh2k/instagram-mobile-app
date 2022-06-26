import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { ContainedButton, OutlinedButton } from "components";

const FollowAndChatAction = ({ style, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <ContainedButton label="Follow" style={{ flex: 1 }} />
      <OutlinedButton label="Message" style={{ flex: 1, marginLeft: 12 }} />
    </View>
  );
};

FollowAndChatAction.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FollowAndChatAction;
