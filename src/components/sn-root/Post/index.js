import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";

const Post = ({ data, navigation, ...otherProps }) => {
  const { avatarSrc, username, content, imageContentSrc } = data;
  console.log(navigation)

  return (
    <View {...otherProps}>
      <PostHeader avatarSrc={avatarSrc} name={username} />
      <PostContent
        content={content}
        imageContentSrc={imageContentSrc}
        style={styles.content}
      />
      <PostActions navigation={navigation} />
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
