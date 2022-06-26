import React from "react";
import { TouchableOpacity } from "react-native";
import { MainLayout } from "layouts";
import { LocationArrowIcon } from "icons";
import { InputBox, Chats } from "components";

const Comment = () => {
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
      <Chats />
      <InputBox />
    </MainLayout>
  );
};

export default Comment;
