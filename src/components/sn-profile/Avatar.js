import React from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from "react-native";

const Avatar = props => {
  const imageUri =
    "https://res.cloudinary.com/coders-tokyo/image/upload/v1608429814/uf6dap9gxsb3gl7ewg40.jpg";

  return (
    <View {...props}>
      <Image style={styles.image} source={{ uri: imageUri }} />
    </View>
  );
};

Avatar.propTypes = {
  imageUri: PropTypes.string,
};

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
});

export default Avatar;
