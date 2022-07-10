import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { CameraIcon } from "icons";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "components";
import { getUploadFormData, toCamel } from "utils";
import { useToast } from "react-native-toast-notifications";
import DocumentPicker from "react-native-document-picker";
import { ApiConstant } from "const";
import { PostService } from "services";
import { useIsFocused } from "@react-navigation/native";

const AvatarChange = ({ imageUri, setImageUri, style = {}, ...otherProps }) => {
  const toast = useToast();
  const isFocused = useIsFocused();

  const userInfo = useSelector(({ userRedux }) => userRedux.user);

  const [isLoading, setIsLoading] = useState(false);

  const onPickImage = async () => {
    setIsLoading(true);

    try {
      const bodyFormData = await getUploadFormData();

      const uploadRes = await PostService.postCloudinaryUpload(bodyFormData);

      if (uploadRes.status === ApiConstant.STT_OK) {
        const responseData = toCamel(uploadRes.data);

        setImageUri(responseData.secureUrl);
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        toast.show("You have cancelled uploading!", {
          type: "warning",
        });
      } else {
        toast.show("Cannot update. Please try again!", { type: "danger" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isFocused) return;
    setImageUri(userInfo.userImageUrl);
  }, [userInfo, isFocused, setImageUri]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.wrapper, style]}
      onPress={onPickImage}
      {...otherProps}
    >
      <Image
        style={styles.avatar}
        source={{
          uri: imageUri,
        }}
      />
      <View style={styles.camera}>
        <CameraIcon />
      </View>

      <LoadingSpinner isVisible={isLoading} />
    </TouchableOpacity>
  );
};

AvatarChange.propTypes = {
  style: PropTypes.object,
  imageUri: PropTypes.any,
  setImageUri: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#3A466480",
  },
  camera: {
    position: "absolute",
    bottom: -1,
    right: -1,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AvatarChange;
