import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { AppConstant } from "const";

const CommentItem = ({ data, style, ...otherProps }) => {
  const { user, caption, createdAt = "" } = data;

  return (
    <View style={[styles.root, style]} {...otherProps}>
      <Image style={styles.avatar} source={{ uri: user.userImageUrl }} />

      <View>
        <View style={styles.commentWrapper}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={{ color: "#262626" }}>{caption}</Text>
        </View>

        <Text style={styles.time}>
          {moment(createdAt).format(AppConstant.DATE_TIME_FORMAT)}
        </Text>
      </View>
    </View>
  );
};

CommentItem.propTypes = {
  data: PropTypes.shape({
    user: PropTypes.shape({
      userImageUrl: PropTypes.string,
      name: PropTypes.string,
    }),
    caption: PropTypes.string,
    createdAt: PropTypes.string,
    postId: PropTypes.string,
  }),
  style: PropTypes.object,
};

CommentItem.defaultProps = {
  data: { user: {} },
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

export default CommentItem;
