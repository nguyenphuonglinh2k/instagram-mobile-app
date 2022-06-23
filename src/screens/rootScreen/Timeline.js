import React from "react";
import { View } from "react-native";
import { MainLayout } from "layouts";
import StoryView from "components/sn-root/StoryView";
import Posts from "components/sn-root/Posts";

const Timeline = () => {
  return (
    <MainLayout>
      <View style={{ flex: 1 }}>
        <StoryView />
        <Posts />
      </View>
    </MainLayout>
  );
};

export default Timeline;
