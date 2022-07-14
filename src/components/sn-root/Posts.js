import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList, RefreshControl } from "react-native";
import Post from "./Post";
import { PostService } from "services";
import { ApiConstant } from "const";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/core";
import { EmptyData } from "components";

const Posts = () => {
  const isFocuses = useIsFocused();

  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const onGetLikeAction = useCallback(async () => {
    const userId = authUser._id;
    if (!userId) return;

    const response = await PostService.getMyLikes(userId);

    if (response?.status === ApiConstant.STT_OK) {
      Boolean(response?.data) && setLikes(response.data);
    }
  }, [authUser]);

  const onGetPosts = useCallback(async () => {
    setIsLoading(true);
    const response = await PostService.getPosts();

    if (response?.status === ApiConstant.STT_OK) {
      Boolean(response?.data) && setPosts(response.data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isFocuses) onGetLikeAction();
  }, [onGetLikeAction, isFocuses]);

  useEffect(() => {
    if (isFocuses) onGetPosts();
  }, [onGetPosts, isFocuses]);

  return posts?.length ? (
    <FlatList
      data={posts}
      renderItem={({ item, index }) => (
        <Post
          data={item}
          likes={likes}
          onRefetchLikes={onGetLikeAction}
          style={index !== 0 && styles.item}
        />
      )}
      keyExtractor={(_, index) => index}
      style={styles.list}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onGetPosts} />
      }
    />
  ) : (
    <EmptyData title="No posts here" />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  item: {
    marginTop: 24,
  },
});

export default Posts;
