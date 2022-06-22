import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";

const Post = ({ data, ...otherProps }) => {
  const { caption: content, imageUrl: imageContentSrc, user } = data;

  return (
    <View {...otherProps}>
      <PostHeader avatarSrc={user.userImageUrl} name={user.name} />
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
    caption: PropTypes.string,
    imageUrl: PropTypes.string,
    user: PropTypes.shape({
      userImageUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};

Post.defaultProps = {
  data: { user: {} },
};

const styles = StyleSheet.create({
  content: {
    marginTop: 8,
    marginBottom: 10,
  },
});

export default Post;
