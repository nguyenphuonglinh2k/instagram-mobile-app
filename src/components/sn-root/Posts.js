import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList, RefreshControl } from "react-native";
import Post from "./Post";
import { PostService } from "services";
import { ApiConstant } from "const";
import { useSelector } from "react-redux";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const onGetLikeAction = useCallback(async () => {
    const userId = authUser._id;
    if (!userId) return;

    const response = await PostService.getMyLikes(userId);

    if (response.status === ApiConstant.STT_OK) {
      const responseData = response.data;
      setLikes(responseData);
    }
  }, [authUser]);

  const onGetPosts = useCallback(async () => {
    setIsLoading(true);
    const response = await PostService.getPosts();

    if (response.status === ApiConstant.STT_OK) {
      setPosts(response.data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    onGetLikeAction();
  }, [onGetLikeAction]);

  useEffect(() => {
    onGetPosts();
  }, [onGetPosts]);

  return (
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
