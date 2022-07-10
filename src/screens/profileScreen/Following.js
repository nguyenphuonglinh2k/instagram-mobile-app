import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { MainLayout } from "layouts";
import { useSelector } from "react-redux";
import { FollowUserItem } from "components";

const Following = () => {
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

export default Following;
