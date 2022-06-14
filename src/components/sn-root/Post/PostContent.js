import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const PostContent = ({ content, imageContentSrc, ...otherProps }) => {
  return (
    <View {...otherProps}>
      <Text numberOfLines={2} style={styles.content}>
        {content}
      </Text>
      <TouchableOpacity>
        <Text style={styles.viewMore}>View more</Text>
      </TouchableOpacity>
      <Image source={{ uri: imageContentSrc }} style={styles.image} />
    </View>
  );
};

PostContent.propTypes = {
  content: PropTypes.string,
  imageContentSrc: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: "100%",
    height: "auto",
    minHeight: 328,
    marginTop: 10,
  },
  content: {
    color: "#262626",
  },
  viewMore: {
    fontSize: 12,
    color: "rgba(58, 70, 100, 0.5)",
  },
});

export default PostContent;
