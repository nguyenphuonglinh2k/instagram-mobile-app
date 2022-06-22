import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
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
    <View style={styles.list}>
      {posts.map((data, index) => (
        <Post key={index} data={data} style={index !== 0 && styles.item} />
      ))}
    </View>
  );
};

const MOCK_POSTS = Array.from(new Array(5)).map((_, i) => ({
  id: i + 1,
  avatarSrc:
    "https://img1.ak.crunchyroll.com/i/spire3/a4d7780b3670404893ffde7180f10f331652967967_large.jpg",
  username: "Damian",
  content:
    "Creating a seesaw animation never looked this easy. Check this out for a step by step guide & don’t forget to ease your workflow by rendering using the LottieFiles for @Adobe After Effects plugin",
  imageContentSrc:
    "https://img1.ak.crunchyroll.com/i/spire3/6f6bef9669b450fb3e03a7cdc43e8ae61652967766_main.jpg",
}));

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  item: {
    marginTop: 24,
  },
});

export default Posts;
