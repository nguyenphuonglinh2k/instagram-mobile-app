import React from "react";
import { ScrollView } from "react-native";
import StoryView from "./StoryView";
import { MainLayout } from "../../layouts";

const Timeline = () => {
  return (
    <MainLayout>
      <ScrollView>
        <StoryView />
      </ScrollView>
    </MainLayout>
  );
};

export default Timeline;
