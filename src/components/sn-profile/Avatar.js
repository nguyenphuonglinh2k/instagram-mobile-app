import React, { memo } from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const Avatar = props => {
  const userInfo = useSelector(({ userRedux }) => userRedux.user);

  return (
    <View {...props}>
      <Image style={styles.image} source={{ uri: userInfo.userImageUrl }} />
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

export default memo(Avatar);
