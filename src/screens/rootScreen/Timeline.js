import React from "react";
import { ScrollView } from "react-native";
import { MainLayout } from "../../layouts";
import StoryView from "./StoryView";
import Posts from "./Posts";

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
