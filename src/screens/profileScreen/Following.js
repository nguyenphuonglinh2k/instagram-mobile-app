import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { MainLayout } from "layouts";
import { useSelector } from "react-redux";
import { FollowUserItem } from "components/sn-profile";
import { useRoute } from "@react-navigation/core";

const Following = () => {
  const router = useRoute();
  const userId = router.params.userId;

  const following = useSelector(({ userRedux }) => userRedux.following);

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Following",
      }}
    >
      <FlatList
        data={following || []}
        renderItem={({ item }) => (
          <FollowUserItem data={item} userId={userId} hasUnfollowBtn />
        )}
        keyExtractor={(_, i) => i}
        contentContainerStyle={styles.list}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});

export default Following;
