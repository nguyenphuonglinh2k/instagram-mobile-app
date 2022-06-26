import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { HeartIcon, CommentIcon, LocationArrowIcon } from "icons";
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";

const PostActions = ({ style, ...otherProps }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.root, style]} {...otherProps}>
      <TouchableOpacity style={styles.marginRight}>
        <HeartIcon />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.marginRight}
        onPress={() => navigation.navigate(RouteName.COMMENT)}
      >
        <CommentIcon />
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
