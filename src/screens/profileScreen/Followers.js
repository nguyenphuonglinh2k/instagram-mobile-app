import React, { useMemo } from "react";
import { StyleSheet, FlatList } from "react-native";
import { MainLayout } from "layouts";
import { FollowUserItem } from "components/sn-profile";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/core";

const Followers = () => {
  const router = useRoute();
  const userId = router.params.userId;

  const followers = useSelector(({ userRedux }) => userRedux.followers);
  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const hasUnfollowBtn = useMemo(() => {
    return authUser._id !== userId;
  }, [userId, authUser]);

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Followers",
      }}
    >
      <FlatList
        data={followers || []}
        renderItem={({ item }) => (
          <FollowUserItem
            data={item}
            userId={userId}
            hasUnfollowBtn={hasUnfollowBtn}
          />
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

export default Followers;
