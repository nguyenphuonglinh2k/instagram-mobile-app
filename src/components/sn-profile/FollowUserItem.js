import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { OutlinedButton, ContainedButton } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "react-native-toast-notifications";
import { UserService } from "services";
import { ApiConstant } from "const/";
import UserActions from "reduxStore/user.redux";

const FollowUserItem = ({ userId, data, hasUnfollowBtn }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const [isFollowing, setIsFollowing] = useState(data.isFollowing || true);

  const isAuthUser = useMemo(() => {
    return authUser._id === data._id;
  }, [authUser, data]);

  const onGetFollowersAndFollowing = useCallback(async () => {
    dispatch(UserActions.getFollowersRequest(userId));
    dispatch(UserActions.getFollowingRequest(userId));
  }, [userId, dispatch]);

  const onUpdateFollowAction = useCallback(async () => {
    try {
      const response = await UserService.putFollowAction(
        authUser._id,
        data._id,
      );

      if (response.status === ApiConstant.STT_OK) {
        onGetFollowersAndFollowing();
      }
    } catch (error) {
      toast.show("Cannot update. Please try again!", { type: "danger" });
    }
  }, [toast, authUser._id, data._id, onGetFollowersAndFollowing]);

  useEffect(() => {
    setIsFollowing(data.isFollowing);
  }, [data.isFollowing]);

  return (
    <View style={styles.item}>
      <TouchableOpacity activeOpacity={0.7} style={styles.info}>
        <Image style={styles.avatar} source={{ uri: data.userImageUrl }} />
        <Text style={styles.name}>{data.name}</Text>
      </TouchableOpacity>

      {!isAuthUser &&
        (isFollowing ? (
          hasUnfollowBtn ? (
            <OutlinedButton
              onPress={onUpdateFollowAction}
              label="Unfollow"
              style={styles.gradientButton}
              labelWrapperProps={{ style: styles.labelWrapper }}
            />
          ) : (
            <Text style={[styles.followingText]}>Following</Text>
          )
        ) : (
          <ContainedButton
            onPress={onUpdateFollowAction}
            label="Follow"
            style={styles.gradientButton}
            labelProps={{ style: { paddingVertical: 6 } }}
          />
        ))}
    </View>
  );
};

FollowUserItem.propTypes = {
  data: PropTypes.shape({
    userImageUrl: PropTypes.string,
    name: PropTypes.string,
    _id: PropTypes.string,
    isFollowing: PropTypes.bool,
  }),
  hasUnfollowBtn: PropTypes.bool,
  userId: PropTypes.string,
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 12,
    color: "#262626",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#3A466480",
  },
  gradientButton: {
    width: 102,
    height: 30,
    marginLeft: 20,
  },
  labelWrapper: {
    height: 28,
    width: 100,
  },
  followingText: {
    color: "#BEA9E5",
    fontWeight: "700",
    width: 100,
    textAlign: "center",
  },
});

export default FollowUserItem;
