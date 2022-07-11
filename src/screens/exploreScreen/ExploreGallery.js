import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { EmptyData } from "components";
import { PostService } from "services/";
import { ApiConstant } from "const/";
import { useIsFocused } from "@react-navigation/core";

const ExploreGallery = ({ data, style, ...otherProps }) => {
  const isFocused = useIsFocused();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onGetPosts = useCallback(async () => {
    setIsLoading(true);
    const response = await PostService.getPosts();

    if (response.status === ApiConstant.STT_OK) {
      setPosts(response.data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isFocused) onGetPosts();
  }, [onGetPosts, isFocused]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onGetPosts} />
      }
    >
      {posts?.length ? (
        <View style={[styles.list, style]} {...otherProps}>
          {posts.map(({ imageUrl }, index) => (
            <TouchableOpacity key={index} activeOpacity={0.7}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <EmptyData />
      )}
    </ScrollView>
  );
};

ExploreGallery.propTypes = {
  style: PropTypes.object,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
    }),
  ),
};

const width = (Dimensions.get("window").width - 12) / 3;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: width,
    height: width,
    margin: 2,
  },
});

export default ExploreGallery;
