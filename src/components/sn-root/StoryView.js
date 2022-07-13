import { useIsFocused } from "@react-navigation/core";
import CirclePlusIcon from "icons/CirclePlusIcon";
import React, { useEffect } from "react";
import { useCallback } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UserActions from "reduxStore/user.redux";

const StoryView = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const authUser = useSelector(({ authRedux }) => authRedux.user);
  const following = useSelector(({ userRedux }) => userRedux.following);

  const onGetFollowing = useCallback(() => {
    dispatch(UserActions.getFollowingRequest(authUser?._id));
  }, [authUser?._id, dispatch]);

  useEffect(() => {
    if (isFocused) {
      onGetFollowing();
    }
  }, [onGetFollowing, isFocused]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={styles.divider}
    >
      <CreateStoryAvatar />

      {following.map(({ userImageUrl, name }, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={{ alignItems: "center" }}
        >
          <Image style={styles.avatar} source={{ uri: userImageUrl }} />
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const CreateStoryAvatar = () => {
  const authUser = useSelector(({ authRedux }) => authRedux.user || {});

  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.wrapper]}>
      <Image
        style={[styles.avatar, { borderWidth: 1, borderColor: "#3A466480" }]}
        source={{
          uri: authUser.userImageUrl,
        }}
      />
      <Text style={styles.name}>My story</Text>

      <View style={styles.icon}>
        <CirclePlusIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#9796F0",
    marginRight: 15,
  },
  contentContainer: {
    paddingLeft: 16,
    paddingBottom: 16,
    margin: 0,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(196, 196, 196, 0.5)",
    maxHeight: 120,
  },
  wrapper: {
    position: "relative",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 45,
    zIndex: 1,
  },
  name: {
    fontSize: 12,
    color: "#262626",
    marginTop: 4,
    marginRight: 16,
    marginBottom: 16,
  },
});

export default StoryView;
