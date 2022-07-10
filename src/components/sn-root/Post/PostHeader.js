import React, { memo } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MenuIcon } from "icons";
import PropTypes from "prop-types";

const PostHeader = ({ avatarSrc, name, ...otherProps }) => {
  return (
    <TouchableOpacity style={styles.root} {...otherProps}>
      <View style={styles.userInfo}>
        <Image style={styles.avatar} source={{ uri: avatarSrc }} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
        <MenuIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

PostHeader.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  name: {
    color: "#262626",
    fontWeight: "700",
    marginLeft: 10,
  },
});

export default memo(PostHeader);
