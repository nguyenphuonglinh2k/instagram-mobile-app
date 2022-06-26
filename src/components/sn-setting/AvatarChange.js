import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { CameraIcon } from "icons";

const AvatarChange = ({ style = {}, ...otherProps }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapper, style]}
      {...otherProps}
    >
      <Image
        style={styles.avatar}
        source={{
          uri: "https://cdn.dribbble.com/users/2155131/screenshots/15055519/media/eaf5004b9d4f98aebf0ea9cb780b987c.jpg?compress=1&resize=1000x750&vertical=top",
        }}
      />
      <View style={styles.camera}>
        <CameraIcon />
      </View>
    </TouchableOpacity>
  );
};

AvatarChange.propTypes = {
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#3A466480",
  },
  camera: {
    position: "absolute",
    bottom: -1,
    right: -1,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AvatarChange;
