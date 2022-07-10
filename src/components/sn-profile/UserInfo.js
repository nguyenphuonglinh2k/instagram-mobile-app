import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const UserInfo = ({ userId, ...otherProps }) => {
  const userInfo = useSelector(({ userRedux }) => userRedux.user);

  return (
    <View {...otherProps}>
      <Text style={styles.name}>{userInfo.name}</Text>
      <Text style={styles.des}>{userInfo.bio}</Text>
    </View>
  );
};

UserInfo.propTypes = {
  userId: PropTypes.string,
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#262626",
  },
  des: {
    fontSize: 12,
    color: "#262626",
    marginTop: 10,
  },
});

export default UserInfo;
