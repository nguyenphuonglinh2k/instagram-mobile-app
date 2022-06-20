import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { ImageSource } from "assets";
import { MainLayout } from "layouts";

const CreatePost = () => {
  const onPickImage = () => {};

  return (
    <MainLayout isBackScreen>
      <ScrollView style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPickImage}>
          <Image
            style={styles.defaultImage}
            source={ImageSource.CreatePostIconImage}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholderTextColor="#3A4664B2"
          placeholder="Write a caption..."
        />
      </ScrollView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  defaultImage: {
    height: 80,
    width: 80,
    paddingVertical: 16,
  },
  input: {
    color: "#262626",
    fontSize: 12,
  },
  wrapper: {
    padding: 16,
  },
});

export default CreatePost;
