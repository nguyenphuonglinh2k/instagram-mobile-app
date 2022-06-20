import React from "react";
import { ScrollView } from "react-native";
import { MainLayout } from "layouts";
import StoryView from "components/sn-root/StoryView";
import Posts from "components/sn-root/Posts";

const Timeline = () => {
  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryView />
        <Posts />
      </ScrollView>
    </MainLayout>
  );
};

export default Timeline;
