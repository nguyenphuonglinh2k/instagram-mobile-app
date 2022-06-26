import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text } from "react-native";

const UserInfo = props => {
  const name = "Lee";
  const des = "Love flowers <3";

  return (
    <View {...props}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.des}>{des}</Text>
    </View>
  );
};

UserInfo.propTypes = {
  imageUri: PropTypes.string,
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
