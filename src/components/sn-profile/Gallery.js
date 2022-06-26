import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const Gallery = ({ style, ...otherProps }) => {
  return (
    <View style={[styles.list, style]} {...otherProps}>
      {MOCK_PHOTOS.map(({ imageUri }, index) => (
        <Image key={index} source={{ uri: imageUri }} style={styles.image} />
      ))}
    </View>
  );
};

const MOCK_PHOTOS = Array.from(new Array(10)).map(() => ({
  imageUri:
    "https://cdn.dribbble.com/userupload/2955952/file/original-66b2631613c9699078fba66d2624af84.png?compress=1&resize=1024x683",
}));

Gallery.propTypes = {
  style: PropTypes.object,
};

const SPACE_HORIZONTAL = 32;
const width = (Dimensions.get("window").width - SPACE_HORIZONTAL - 12) / 3;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: width,
    height: width,
    margin: 2,
    borderRadius: 4,
  },
});

export default Gallery;
