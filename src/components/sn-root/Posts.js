import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import Post from "./Post";
import { PostService } from "services";
import { ApiConstant } from "const";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await PostService.getPosts();

      if (response.status === ApiConstant.STT_OK) {
        setPosts(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <FlatList
      data={posts}
      renderItem={({ item, index }) => (
        <Post data={item} style={index !== 0 && styles.item} />
      )}
      keyExtractor={(_, index) => index}
      style={styles.list}
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
