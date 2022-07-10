import React, { useCallback, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";
import DocumentPicker from "react-native-document-picker";
import { ImageSource } from "assets";
import { MainLayout } from "layouts";
import { PostService } from "services";
import { ApiConstant } from "const";
import { toCamel } from "utils";
import { RouteName } from "const/path.const";
import { CheckIcon } from "icons";
import { LoadingSpinner } from "components";

const CreatePost = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const [imageUri, setImageUri] = useState();
  const [content, onChangeContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onPickImage = async () => {
    try {
      setIsLoading(true);
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
      bodyFormData.append("folder", "instello");

      const uploadRes = await PostService.postCloudinaryUpload(bodyFormData);

      if (uploadRes.status === ApiConstant.STT_OK) {
        const responseData = toCamel(uploadRes.data);

        setImageUri(responseData.secureUrl);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        toast.show("You have cancelled uploading!", {
          type: "warning",
        });
      } else {
        toast.show("Cannot create post. Please try again!", { type: "danger" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onCreatePost = async () => {
    setIsLoading(true);
    try {
      const response = await PostService.postMyPost({
        imageUrl: imageUri,
        caption: content,
      });

      if (response.status === ApiConstant.STT_CREATED) {
        getPosts();
        navigation.navigate(RouteName.TIMELINE);
        resetData();
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const getPosts = useCallback(async () => {
    try {
      await PostService.getPosts();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const resetData = () => {
    setImageUri();
    onChangeContent("");
    setIsLoading(false);
  };

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "New Post",
        headerRight: (
          <TouchableOpacity onPress={onCreatePost}>
            <CheckIcon />
          </TouchableOpacity>
        ),
      }}
    >
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
          value={content}
          onChangeText={onChangeContent}
          style={styles.input}
          placeholderTextColor="#3A4664B2"
          placeholder="Write a caption..."
          multiline
        />
      </ScrollView>
      <LoadingSpinner isVisible={isLoading} />
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
