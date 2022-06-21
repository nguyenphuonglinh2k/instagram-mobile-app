import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import { ImageSource } from "assets";
import { MainLayout } from "layouts";
import { PostService } from "services";
import { ApiConstant } from "const";
import { toCamel } from "utils";

const CreatePost = () => {
  const [imageUri, setImageUri] = useState();

  const onPickImage = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const photo = {
        uri: response[0].uri,
        type: response[0].type,
        name: response[0].name,
      };
      const bodyFormData = new FormData();

      bodyFormData.append("file", photo);
      bodyFormData.append("upload_preset", "instello");
      bodyFormData.append("cloud_name", "coders.tokyo");

      const uploadRes = await PostService.postCloudinaryUpload(bodyFormData);

      if (uploadRes.status === ApiConstant.STT_OK) {
        const responseData = toCamel(uploadRes.data);

        setImageUri(responseData.secureUrl);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    return () => {
      setImageUri();
    };
  }, []);

  return (
    <MainLayout isBackScreen headerProps={{ title: "New Post" }}>
      <ScrollView style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPickImage}>
          <Image
            style={styles.defaultImage}
            source={
              imageUri ? { uri: imageUri } : ImageSource.CreatePostIconImage
            }
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
    borderRadius: 5,
  },
  input: {
    color: "#262626",
  },
  wrapper: {
    padding: 16,
  },
});

export default CreatePost;
