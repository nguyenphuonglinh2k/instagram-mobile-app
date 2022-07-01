import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { EmptyData } from "components";

const Gallery = ({ data, style, ...otherProps }) => {
  return data?.length ? (
    <View style={[styles.list, style]} {...otherProps}>
      {data.map(({ imageUrl }, index) => (
        <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
      ))}
    </View>
  ) : (
    <EmptyData />
  );
};

Gallery.propTypes = {
  style: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
    }),
  ),
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
