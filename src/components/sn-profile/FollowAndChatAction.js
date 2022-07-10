import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { ContainedButton, OutlinedButton } from "components";
import { useSelector } from "react-redux";
import { UserService } from "services/";
import { ApiConstant } from "const/";
import { useToast } from "react-native-toast-notifications";

const FollowAndChatAction = ({
  userId,
  style,
  onRefetchData,
  ...otherProps
}) => {
  const toast = useToast();

  const followers = useSelector(({ userRedux }) => userRedux.followers);
  const authUser = useSelector(({ authRedux }) => authRedux.user);

  const [isFollowing, setIsFollowing] = useState(true);

  const onUpdateFollowAction = useCallback(async () => {
    try {
      const response = await UserService.putFollowAction(authUser._id, userId);

      if (response.status === ApiConstant.STT_OK) {
        onRefetchData();
      }
    } catch (error) {
      toast.show("Cannot update. Please try again!", { type: "danger" });
    }
  }, [toast, authUser._id, userId, onRefetchData]);

  useEffect(() => {
    const isAlreadyFollowing = followers.some(
      item => item._id === authUser._id,
    );

    setIsFollowing(isAlreadyFollowing);
  }, [authUser, followers]);

  return (
    <View style={[styles.wrapper, style]} {...otherProps}>
      <ContainedButton
        label={isFollowing ? "Unfollow" : "Follow"}
        style={{ flex: 1 }}
        onPress={onUpdateFollowAction}
      />
      <OutlinedButton label="Message" style={{ flex: 1, marginLeft: 12 }} />
    </View>
  );
};

FollowAndChatAction.propTypes = {
  style: PropTypes.object,
  userId: PropTypes.string,
  onRefetchData: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FollowAndChatAction;
