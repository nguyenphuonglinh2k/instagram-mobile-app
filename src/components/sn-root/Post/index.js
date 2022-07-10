import React, { useCallback, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import { useSelector } from "react-redux";
import { PostService } from "services";
import { ApiConstant } from "const";
import { useNavigation } from "@react-navigation/native";
import { RouteName } from "const/path.const";

const Post = ({ data, likes, onRefetchLikes, ...otherProps }) => {
  const navigation = useNavigation();
  const { caption: content, imageUrl: imageContentSrc, user, _id: id } = data;

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const isLikedPost = useMemo(() => {
    const likedPost = likes.find(
      item => item.userId === authUser._id && item.postId === id,
    );
    return Boolean(likedPost);
  }, [likes, authUser, id]);

  const onToggleLike = useCallback(async () => {
    try {
      const response = await PostService.postActionLike(
        { postId: id },
        authUser._id,
      );

      if (response.status === ApiConstant.STT_OK) {
        if (onRefetchLikes instanceof Function) {
          onRefetchLikes();
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [id, authUser, onRefetchLikes]);

  const onGoToProfile = useCallback(() => {
    navigation.navigate(RouteName.PROFILE, {
      userId: user._id,
      name: user.name,
    });
  }, [navigation, user]);

  return (
    <View {...otherProps}>
      <PostHeader
        avatarSrc={user.userImageUrl}
        name={user.name}
        onPress={onGoToProfile}
      />
      <PostContent
        content={content}
        imageContentSrc={imageContentSrc}
        style={styles.content}
      />
      <PostActions
        postId={id}
        isLiked={isLikedPost}
        onToggleLike={onToggleLike}
      />
    </View>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    caption: PropTypes.string,
    imageUrl: PropTypes.string,
    user: PropTypes.shape({
      _id: PropTypes.string,
      userImageUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
  likes: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.string,
      postId: PropTypes.string,
    }),
  ),
  onRefetchLikes: PropTypes.func,
};

Post.defaultProps = {
  data: { user: {} },
};

const styles = StyleSheet.create({
  content: {
    marginTop: 8,
    marginBottom: 10,
  },
});

export default Post;
