import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const PostContent = ({ content, imageContentSrc, ...otherProps }) => {
  const [numberOfLines, setNumberOfLines] = useState(2);

  const onToggleContentLength = () => {
    if (numberOfLines === 0) {
      setNumberOfLines(MAXIMUM_NUMBER_OF_LINES);
    } else {
      setNumberOfLines(0);
    }
  };

  const onTextLayout = e => {
    const lineLength = e.nativeEvent.lines.length;
    if (lineLength <= MAXIMUM_NUMBER_OF_LINES) {
      setNumberOfLines(null);
    }
  };

  return (
    <View {...otherProps}>
      <Text
        numberOfLines={numberOfLines}
        style={styles.content}
        onTextLayout={onTextLayout}
      >
        {content}
      </Text>

      {numberOfLines !== null && (
        <TouchableOpacity onPress={onToggleContentLength}>
          <Text style={styles.viewMore}>
            {numberOfLines === 0 ? "View less" : "View more"}
          </Text>
        </TouchableOpacity>
      )}

      <Image source={{ uri: imageContentSrc }} style={styles.image} />
    </View>
  );
};

const MAXIMUM_NUMBER_OF_LINES = 2;

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
