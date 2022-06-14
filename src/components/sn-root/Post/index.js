import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";

const Post = ({ data, ...otherProps }) => {
  const { avatarSrc, username, content, imageContentSrc } = data;

  return (
    <View {...otherProps}>
      <PostHeader avatarSrc={avatarSrc} name={username} />
      <PostContent
        content={content}
        imageContentSrc={imageContentSrc}
        style={styles.content}
      />
      <PostActions />
    </View>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    avatarSrc: PropTypes.string,
    username: PropTypes.string,
    content: PropTypes.string,
    imageContentSrc: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  content: {
    marginTop: 8,
    marginBottom: 10,
  },
});

export default Post;
