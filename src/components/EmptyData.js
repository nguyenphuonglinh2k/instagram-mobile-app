import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageSource } from "assets";

const EmptyData = ({ title, style, ...otherProps }) => {
  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <Image style={styles.image} source={ImageSource.EmptyDataImage} />
      <Text>{title}</Text>
    </View>
  );
};

EmptyData.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
};

EmptyData.defaultProps = {
  style: {},
  title: "Data is empty",
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    height: 150,
    width: 180,
  },
});

export default EmptyData;
