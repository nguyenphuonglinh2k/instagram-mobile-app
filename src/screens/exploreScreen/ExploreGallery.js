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
  TextInput,
} from "react-native";
import { EmptyData } from "components";
import { PostService } from "services/";
import { ApiConstant } from "const/";
import { useIsFocused } from "@react-navigation/core";
import { SearchIcon } from "icons";

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
    <View style={{ flex: 1 }}>
      <SearchInput />
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
    </View>
  );
};

const SearchInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <SearchIcon style={styles.icon} color="#3A466480" />
      <TextInput placeholder="Search" />
    </View>
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
  icon: {
    marginRight: 8,
  },
  inputWrapper: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 40,
  },
});

export default ExploreGallery;
