import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import { MainLayout } from "layouts";
import { FollowUserItem } from "components/sn-profile";
import { useSelector } from "react-redux";
import { UserService } from "services/index";
import { ApiConstant } from "const/index";
import { useToast } from "react-native-toast-notifications";
import { useIsFocused } from "@react-navigation/core";

const FriendSuggestion = () => {
  const toast = useToast();
  const isFocused = useIsFocused();

  const [authUser, following] = useSelector(({ authRedux, userRedux }) => [
    authRedux.user,
    userRedux.following,
  ]);

  const [suggestion, setSuggestion] = useState([]);

  const onGetFriendSuggestion = useCallback(async () => {
    try {
      const response = await UserService.getFriendSuggestion(authUser._id);

      if (response.status === ApiConstant.STT_OK) {
        setSuggestion(response.data);
      }
    } catch (error) {
      toast.show("Something went wrong", { type: "danger" });
    }
  }, [authUser._id, toast]);

  useEffect(() => {
    if (isFocused) {
      onGetFriendSuggestion();
    }
  }, [onGetFriendSuggestion, isFocused, following]);

  return (
    <MainLayout>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.title}>Friend Suggestions</Text>
        }
        data={suggestion || []}
        renderItem={({ item }) => (
          <FollowUserItem data={item} userId={authUser._id} />
        )}
        keyExtractor={(_, i) => i}
        contentContainerStyle={styles.list}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
    marginBottom: 10,
    color: "#292D32",
    fontWeight: "700",
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  list: {
    padding: 16,
    flex: 1,
  },
});

export default FriendSuggestion;
