import React from "react";
import { TouchableOpacity } from "react-native";
import { MainLayout } from "layouts";
import { LocationArrowIcon } from "icons";
import { InputBox, Comments } from "components";
import { useRoute } from "@react-navigation/native";

const Comment = () => {
  const route = useRoute();
  const postId = route.params?.postId;

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Comments",
        headerRight: (
          <TouchableOpacity>
            <LocationArrowIcon />
          </TouchableOpacity>
        ),
      }}
    >
      <Comments postId={postId} />
      <InputBox />
    </MainLayout>
  );
};

export default Comment;
