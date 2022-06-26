import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { HeartIcon, CommentIcon, LocationArrowIcon } from "../../../icons";


const PostActions = ({ style, navigation, ...otherProps }) => {


  const navigateScreen = () => {
    navigation.navigate("Comment")
  }


  return (
    <View style={[styles.root, style]} {...otherProps}>
      <TouchableOpacity style={styles.marginRight}>
        <HeartIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.marginRight}
      >
        <CommentIcon onPress={navigateScreen} />
      </TouchableOpacity>
      <TouchableOpacity>
        <LocationArrowIcon />
      </TouchableOpacity>
    </View>
  );
};

PostActions.propTypes = {
  style: PropTypes.object,
};

PostActions.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    flexDirection: "row",
  },
  marginRight: {
    marginRight: 10,
  },
});

export default PostActions;
