import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { MainLayout } from "layouts";
import { FollowUserItem } from "components";
import { useSelector } from "react-redux";

const Followers = () => {
  const followers = useSelector(({ userRedux }) => userRedux.followers);

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Followers",
      }}
    >
      <FlatList
        data={followers || []}
        renderItem={({ item }) => <FollowUserItem data={item} />}
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

export default Followers;
