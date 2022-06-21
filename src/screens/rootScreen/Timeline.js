import React from "react";
import { ScrollView } from "react-native";
import { MainLayout } from "layouts";
import StoryView from "components/sn-root/StoryView";
import Posts from "components/sn-root/Posts";

const Timeline = ({ navigation }) => {
  return (
    <MainLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryView />
        {/* <ActionContainer /> */}
        <Posts navigation={navigation} />
      </ScrollView>
    </MainLayout>
  );
};

export default Timeline;
