import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";

const Chat = ({ data, style, ...otherProps }) => {
  return (
    <View style={[styles.root, style]} {...otherProps}>
      <Image style={styles.avatar} source={{ uri: data.userImageSrc }} />

      <View>
        <View style={styles.commentWrapper}>
          <Text style={styles.username}>{data.name}</Text>
          <Text style={{ color: "#262626" }}>{data.content}</Text>
        </View>

        <Text style={styles.time}>{data.time}</Text>
      </View>
    </View>
  );
};

Chat.propTypes = {
  data: PropTypes.shape({
    userImageSrc: PropTypes.string,
    name: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.string,
  }),
  style: PropTypes.object,
};

Chat.defaultProps = {
  data: {},
  style: {},
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
  commentWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "rgba(196, 196, 196, 0.35)",
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#3A466480",
  },
  username: {
    color: "#262626",
    fontWeight: "700",
  },
  time: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
  },
});

export default Chat;
