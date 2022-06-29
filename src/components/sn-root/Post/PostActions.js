import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { HeartIcon, CommentIcon, LocationArrowIcon } from "icons";
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";

const PostActions = ({
  postId,
  isLiked,
  style,
  onToggleLike,
  ...otherProps
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.root, style]} {...otherProps}>
      <TouchableOpacity style={styles.marginRight} onPress={onToggleLike}>
        <HeartIcon isFilled={isLiked} color={isLiked ? "#FF4768" : "#292D32"} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.marginRight}
        onPress={() => navigation.navigate(RouteName.COMMENT, { postId })}
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
  postId: PropTypes.string,
  style: PropTypes.object,
  isLiked: PropTypes.bool,
  onToggleLike: PropTypes.func,
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
